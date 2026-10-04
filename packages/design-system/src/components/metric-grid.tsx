import * as React from "react";
import { ResponsiveGrid } from "./responsive-grid";
import { StatCard } from "./stat-card";

export const MetricGrid = ({
  items,
  columns = 4,
}: {
  items: Array<{ label: React.ReactNode; value: React.ReactNode; delta?: React.ReactNode }>;
  columns?: number;
}) => {
  return (
    <ResponsiveGrid columns={columns}>
      {items.map((item) => (
        <StatCard key={String(item.label)} {...item} />
      ))}
    </ResponsiveGrid>
  );
};
