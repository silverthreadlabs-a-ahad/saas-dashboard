/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "Jan", arr: 34.2, target: 34 },
  { month: "Feb", arr: 35.8, target: 35.2 },
  { month: "Mar", arr: 37.9, target: 36.8 },
  { month: "Apr", arr: 39.6, target: 38.5 },
  { month: "May", arr: 40.9, target: 40.2 },
  { month: "Jun", arr: 42.4, target: 41.8 },
];

export function RevenueTrendChart() {
  return (
    <div className="h-64 w-full rounded-xl border border-border bg-surface p-4">
      <div className="mb-3 flex items-baseline justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            ARR trend
          </p>
          <p className="text-sm text-text-muted">
            Actual vs board target over the last 6 months
          </p>
        </div>
        <div className="text-right text-xs">
          <p className="font-medium text-success">+31% YoY</p>
          <p className="text-muted">Ahead of plan</p>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 4, right: 8, left: -18, bottom: 0 }}>
          <defs>
            <linearGradient id="arrFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke="#334155"
            strokeDasharray="3 3"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fill: "#64748B", fontSize: 11 }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tick={{ fill: "#64748B", fontSize: 11 }}
            tickFormatter={(value) => `$${value.toFixed(0)}M`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E293B",
              borderRadius: 8,
              border: "1px solid #334155",
            }}
            labelStyle={{ color: "#F1F5F9", fontSize: 12 }}
            itemStyle={{ fontSize: 12 }}
            formatter={((value: any, name?: string) => {
              const numericValue =
                typeof value === "number"
                  ? value
                  : Array.isArray(value) && typeof value[0] === "number"
                  ? value[0]
                  : 0;
              const seriesName = name ?? "";

              if (seriesName === "arr") {
                return [`$${numericValue.toFixed(1)}M ARR`, "Actual"];
              }
              if (seriesName === "target") {
                return [`$${numericValue.toFixed(1)}M ARR`, "Target"];
              }
              return [numericValue, seriesName];
            }) as any}
          />
          <Area
            type="monotone"
            dataKey="target"
            stroke="#1D4ED8"
            strokeWidth={1.5}
            strokeDasharray="4 4"
            dot={false}
            isAnimationActive={true}
            animationDuration={800}
            animationBegin={100}
          />
          <Area
            type="monotone"
            dataKey="arr"
            stroke="#3B82F6"
            strokeWidth={2}
            fill="url(#arrFill)"
            dot={{ r: 3, strokeWidth: 1, stroke: "#0F172A", fill: "#3B82F6" }}
            activeDot={{ r: 4 }}
            isAnimationActive={true}
            animationDuration={800}
            animationBegin={0}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

