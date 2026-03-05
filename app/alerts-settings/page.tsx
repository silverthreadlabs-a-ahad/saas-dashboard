export default function AlertsAndSettingsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4 shadow-sm md:flex-row md:items-center md:justify-between md:gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Configuration
          </p>
          <h1 className="mt-1 text-xl font-semibold text-text">
            Alerts & Settings
          </h1>
          <p className="mt-2 text-sm text-muted">
            Align alert rules with board-level metrics so executives only see
            notifications when something truly moves the needle.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-success">
            In-app
          </span>
          <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-success">
            Email
          </span>
          <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-muted">
            Slack (planned)
          </span>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary lg:col-span-2">
          <h2 className="text-sm font-semibold text-text">
            Active alert rules
          </h2>
          <p className="mt-2 text-sm text-muted">
            Shell for a list of alert conditions across revenue, churn, product
            usage, and pipeline with adjustable thresholds.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary">
          <h2 className="text-sm font-semibold text-text">
            Notification delivery
          </h2>
          <p className="mt-2 text-sm text-muted">
            Placeholder for switches controlling whether alerts are delivered
            in-app, via email, or to team channels.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary">
          <h2 className="text-sm font-semibold text-text">
            Role-based views
          </h2>
          <p className="mt-2 text-sm text-muted">
            Space reserved for mapping roles like CEO, CFO, and CRO to their
            default landing pages and KPI sets.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary">
          <h2 className="text-sm font-semibold text-text">
            Time and locale
          </h2>
          <p className="mt-2 text-sm text-muted">
            Shell for configuring default date ranges, time zones, and currency
            display across the dashboard.
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm transition-transform transition-colors duration-150 hover:-translate-y-0.5 hover:border-primary">
          <h2 className="text-sm font-semibold text-text">
            Data refresh policies
          </h2>
          <p className="mt-2 text-sm text-muted">
            Layout area for defining how frequently metrics refresh and how
            stale data warnings are presented to users.
          </p>
        </div>
      </section>
    </div>
  );
}

