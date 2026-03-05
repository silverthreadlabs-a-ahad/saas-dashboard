export default function CustomerHealthPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4 shadow-sm md:flex-row md:items-center md:justify-between md:gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Retention
          </p>
          <h1 className="mt-1 text-xl font-semibold text-text">
            Customer Health
          </h1>
          <p className="mt-2 text-sm text-muted">
            Monitor churn, health scores, NPS, and support volume so you can
            intervene early with at-risk accounts.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-success">
            68% healthy
          </span>
          <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-warning">
            22% at-risk
          </span>
          <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-error">
            10% critical
          </span>
        </div>
      </header>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary lg:col-span-2">
          <h2 className="text-sm font-semibold text-text">
            Churn rate trends
          </h2>
          <p className="mt-2 text-sm text-muted">
            Placeholder for logo and revenue churn trends, highlighting cohorts
            and contracts that are most at risk.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary">
          <h2 className="text-sm font-semibold text-text">
            Health score distribution
          </h2>
          <p className="mt-2 text-sm text-muted">
            Shell for a distribution chart showing the share of customers in
            healthy, at-risk, and critical bands.
          </p>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary lg:col-span-2">
          <h2 className="text-sm font-semibold text-text">
            At-risk accounts table
          </h2>
          <p className="mt-2 text-sm text-muted">
            Layout reserved for a sortable table of accounts ranked by health
            score, contract value, and renewal date.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary">
          <h2 className="text-sm font-semibold text-text">
            NPS and support volume
          </h2>
          <p className="mt-2 text-sm text-muted">
            Space for NPS trend lines paired with support ticket volume by
            severity to highlight leading indicators of churn.
          </p>
        </div>
      </section>
    </div>
  );
}

