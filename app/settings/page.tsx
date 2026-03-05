export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-2 rounded-xl border border-border bg-surface p-4 shadow-sm md:flex-row md:items-center md:justify-between md:gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Workspace
          </p>
          <h1 className="mt-1 text-xl font-semibold text-text">Settings</h1>
          <p className="mt-2 text-sm text-muted">
            Configure defaults for executives across roles, time zones,
            currencies, integrations, and audit controls.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-success">
            Changes auto-saved
          </span>
          <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-muted">
            Prototype only
          </span>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)]">
        <div className="space-y-4 rounded-xl border border-border bg-surface p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-text">
            Executive roles & access
          </h2>
          <div className="space-y-3 text-sm text-muted">
            <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg bg-surface-alt/40 px-3 py-2">
              <div>
                <p className="font-medium text-text">Leadership roles</p>
                <p className="mt-1 text-xs text-muted">
                  Map roles like CEO, CFO, CRO, and CPO to default dashboards
                  and metric packs.
                </p>
              </div>
              <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 text-[11px] font-medium text-text">
                5 roles
              </span>
            </div>
            <div className="flex flex-wrap items-start justify-between gap-3 rounded-lg bg-surface-alt/40 px-3 py-2">
              <div>
                <p className="font-medium text-text">Access policy</p>
                <p className="mt-1 text-xs text-muted">
                  Restrict views by business unit or region while keeping
                  company-level KPIs visible to the C-suite.
                </p>
              </div>
              <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 text-[11px] font-medium text-success">
                Least privilege
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-xl border border-border bg-surface p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-text">
            Time zone & business calendar
          </h2>
          <div className="space-y-3 text-sm text-muted">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-medium text-text">Primary time zone</p>
                <p className="mt-1 text-xs text-muted">
                  All dates and charts align to a single executive time zone.
                </p>
              </div>
              <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 text-[11px] font-medium text-text">
                UTC-5 (ET)
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="font-medium text-text">Fiscal year</p>
                <p className="mt-1 text-xs text-muted">
                  Controls quarter boundaries for revenue and pipeline targets.
                </p>
              </div>
              <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 text-[11px] font-medium text-text">
                Jan–Dec
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-text">Currency & units</h2>
          <div className="mt-3 space-y-2 text-xs text-muted">
            <div className="flex items-center justify-between gap-4">
              <span>Reporting currency</span>
              <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-text">
                USD
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Display format</span>
              <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-text">
                Millions
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-text">Data integrations</h2>
          <div className="mt-3 space-y-2 text-xs text-muted">
            <div className="flex items-center justify-between gap-4">
              <span>CRM</span>
              <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-success">
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Billing</span>
              <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-success">
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span>Product analytics</span>
              <span className="rounded-full border border-border bg-surface-alt/40 px-3 py-1 font-medium text-muted">
                Read-only
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border bg-surface p-4 shadow-sm">
          <h2 className="text-sm font-semibold text-text">
            Audit and change history
          </h2>
          <p className="mt-2 text-sm text-muted">
            Keep a record of configuration changes so executives can see when
            alert thresholds, roles, or integrations were updated.
          </p>
          <p className="mt-3 text-xs text-muted">
            In a production build, this panel would surface a filtered audit
            log focused on settings that affect reported KPIs.
          </p>
        </div>
      </section>
    </div>
  );
}

