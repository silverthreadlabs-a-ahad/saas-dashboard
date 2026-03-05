export default function RevenueIntelligencePage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4 shadow-sm md:flex-row md:items-center md:justify-between md:gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Revenue
          </p>
          <h1 className="mt-1 text-xl font-semibold text-text">
            Revenue Intelligence
          </h1>
          <p className="mt-2 text-sm text-muted">
            Deep-dive into the drivers behind MRR, ARR growth, CAC efficiency,
            and burn so finance and sales stay aligned.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-text">
            MRR $3.53M
          </span>
          <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-success">
            +31% ARR YoY
          </span>
          <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-warning">
            Runway 24 months
          </span>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary xl:col-span-2">
          <h2 className="text-sm font-semibold text-text">
            MRR waterfall breakdown
          </h2>
          <p className="mt-2 text-sm text-muted">
            Visualize how new business, expansion, contraction, and churn
            combine to produce net MRR movement for the month.
          </p>
          <p className="mt-3 text-xs text-muted">
            New: $210K · Expansion: $88K · Churn: -$42K · Net:{" "}
            <span className="font-medium text-accent">+$256K</span>.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary">
          <h2 className="text-sm font-semibold text-text">
            ARR growth trend
          </h2>
          <p className="mt-2 text-sm text-muted">
            Track annual recurring revenue growth against board targets across
            both year-over-year and quarter-over-quarter views.
          </p>
          <p className="mt-3 text-xs text-muted">
            Current ARR: $42.4M · Growth:{" "}
            <span className="font-medium text-success">+31% YoY</span>.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary">
          <h2 className="text-sm font-semibold text-text">
            CAC vs LTV ratios
          </h2>
          <p className="mt-2 text-sm text-muted">
            Compare blended customer acquisition cost to lifetime value to
            ensure growth investments are sustainable.
          </p>
          <p className="mt-3 text-xs text-muted">
            CAC: $8,400 · LTV: $62,000 · LTV:CAC ratio:{" "}
            <span className="font-medium text-success">7.4x</span>.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary">
          <h2 className="text-sm font-semibold text-text">
            Burn rate and runway
          </h2>
          <p className="mt-2 text-sm text-muted">
            Summarize current monthly cash burn, runway months remaining, and
            variance against plan for board updates.
          </p>
          <p className="mt-3 text-xs text-muted">
            Burn: $890K/month · Runway:{" "}
            <span className="font-medium text-warning">24 months</span>.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary">
          <h2 className="text-sm font-semibold text-text">
            Forecast vs actuals variance
          </h2>
          <p className="mt-2 text-sm text-muted">
            Highlight where actual revenue performance is running ahead of or
            behind forecast by month and segment.
          </p>
          <p className="mt-3 text-xs text-muted">
            Use this panel in weekly revenue reviews to focus discussion on
            gaps that materially change the outlook.
          </p>
        </div>
      </section>
    </div>
  );
}

