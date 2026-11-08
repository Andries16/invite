import type { GenerationQueue } from "@invite/generation-queue";
import { PostgresGenerationOutboxRepository } from "./postgres-generation.repository";

export interface GenerationOutboxDispatcherOptions {
  batchSize?: number;
  leaseDurationMs?: number;
  retryDelayMs?: number;
}

export interface GenerationOutboxDispatchResult {
  claimed: number;
  dispatched: number;
  failed: number;
}

/**
 * Dispatches durable outbox events to the queue with at-least-once delivery.
 * A scheduler/worker process should invoke runOnce repeatedly.
 */
export class GenerationOutboxDispatcher {
  private readonly batchSize: number;
  private readonly leaseDurationMs: number;
  private readonly retryDelayMs: number;

  public constructor(
    private readonly outbox: PostgresGenerationOutboxRepository,
    private readonly queue: GenerationQueue,
    options: GenerationOutboxDispatcherOptions = {},
  ) {
    this.batchSize = options.batchSize ?? 25;
    this.leaseDurationMs = options.leaseDurationMs ?? 30_000;
    this.retryDelayMs = options.retryDelayMs ?? 5_000;

    if (!Number.isInteger(this.batchSize) || this.batchSize < 1) {
      throw new RangeError("Outbox batch size must be a positive integer.");
    }
    if (!Number.isFinite(this.leaseDurationMs) || this.leaseDurationMs < 1) {
      throw new RangeError("Outbox lease duration must be a positive number.");
    }
    if (!Number.isFinite(this.retryDelayMs) || this.retryDelayMs < 0) {
      throw new RangeError("Outbox retry delay must be a non-negative number.");
    }
  }

  public async runOnce(): Promise<GenerationOutboxDispatchResult> {
    const events = await this.outbox.claimBatch(this.batchSize, this.leaseDurationMs);
    let dispatched = 0;
    let failed = 0;

    for (const event of events) {
      try {
        await this.queue.enqueue(event.payload);
        await this.outbox.markDispatched(event.id);
        dispatched += 1;
      } catch (error) {
        failed += 1;
        const message = error instanceof Error ? error.message : "Unknown queue dispatch error";
        // If this update also fails, the processing lease expires and another
        // dispatcher can recover the event without losing the durable record.
        await this.outbox.markFailed(event.id, message, this.retryDelayMs);
      }
    }

    return { claimed: events.length, dispatched, failed };
  }
}
