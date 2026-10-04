export type Result<T> = { ok: true; value: T } | { ok: false; error: Error };
export type Brand<T, Name extends string> = T & { readonly __brand: Name };
export const assertNever = (value: never): never => { throw new Error(String(value)); };
