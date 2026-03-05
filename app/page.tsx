import { RevenueTrendChart } from "./components/revenue-trend-chart";
import { AnimatedNumber } from "./components/animated-number";

const dau = 1240;
const mau = 4890;
const dauMauRatio = 25.4;

export default function ExecutiveOverviewPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            ARR
          </p>
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <div className="text-2xl font-semibold leading-none text-text">
              <AnimatedNumber
                value={42.4}
                decimals={1}
                prefix="$"
                suffix="M"
              />
            </div>
            <span className="text-xs font-medium text-success">
              +31% YoY
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">
            Annual recurring revenue run rate across all active subscriptions.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            MRR
          </p>
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <div className="text-2xl font-semibold leading-none text-text">
              <AnimatedNumber
                value={3.53}
                decimals={2}
                prefix="$"
                suffix="M"
              />
            </div>
            <span className="text-xs font-medium text-accent">
              +$256K net
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">
            New: $210K · Expansion: $88K · Churn: -$42K this month.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            NRR
          </p>
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <div className="text-2xl font-semibold leading-none text-text">
              <AnimatedNumber
                value={108}
                decimals={0}
                suffix="%"
              />
            </div>
            <span className="text-xs font-medium text-success">
              Healthy
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">
            Net revenue retention comfortably above the 100% growth benchmark.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Churn rate
          </p>
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <div className="text-2xl font-semibold leading-none text-text">
              <AnimatedNumber
                value={1.8}
                decimals={1}
                suffix="%"
              />
            </div>
            <span className="text-xs font-medium text-error">
              Logo
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">
            1.8% logo churn and 1.2% revenue churn on a rolling monthly basis.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            DAU / MAU
          </p>
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <div className="text-2xl font-semibold leading-none text-text">
              <AnimatedNumber
                value={dauMauRatio}
                decimals={1}
                suffix="%"
              />
            </div>
            <span className="text-xs font-medium text-accent">
              Engagement
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">
            <span className="font-medium text-text">
              <AnimatedNumber value={dau} /> DAU
            </span>{" "}
            and{" "}
            <span className="font-medium text-text">
              <AnimatedNumber value={mau} /> MAU
            </span>{" "}
            with steady product stickiness.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-surface p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Pipeline
          </p>
          <div className="mt-3 flex items-baseline justify-between gap-3">
            <div className="text-2xl font-semibold leading-none text-text">
              <AnimatedNumber
                value={18.6}
                decimals={1}
                prefix="$"
                suffix="M"
              />
            </div>
            <span className="text-xs font-medium text-success">
              28% win rate
            </span>
          </div>
          <p className="mt-2 text-xs text-muted">
            Average deal size of $42K with coverage to support current targets.
          </p>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2">
          <RevenueTrendChart />
        </div>
        <div className="flex flex-col gap-4">
          <div className="rounded-xl border border-border bg-surface p-4">
            <h2 className="text-sm font-semibold text-text">
              Executive focus for this month
            </h2>
            <p className="mt-2 text-sm text-muted">
              Revenue is tracking ahead of plan, while churn remains within
              target bands. The main risks are concentrated in a small set of
              high-value renewals coming due next quarter.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-surface-alt p-4">
            <h2 className="text-sm font-semibold text-text">
              Active alerts summary
            </h2>
            <p className="mt-2 text-sm text-muted">
              No critical alerts triggered in the last 7 days. Two accounts
              moved into the at-risk band based on declining product usage and
              open support tickets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

