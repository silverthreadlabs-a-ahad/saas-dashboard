"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS } from "./nav-items";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-60 flex-shrink-0 border-r border-border bg-background px-4 py-4 md:flex md:flex-col">
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-semibold text-text">
          EX
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-text">
            Executive Dashboard
          </span>
          <span className="text-[11px] font-medium uppercase tracking-wide text-muted">
            SaaS Intelligence
          </span>
        </div>
      </div>

      <nav className="flex-1 space-y-1 text-sm">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href + item.label}
              href={item.href}
              className={[
                "group flex items-center gap-3 rounded-md px-2 py-2 transition-colors",
                isActive
                  ? "bg-surface text-text"
                  : "text-muted hover:bg-surface hover:text-text",
              ].join(" ")}
            >
              <Icon
                className={
                  isActive
                    ? "h-4 w-4 text-primary"
                    : "h-4 w-4 text-muted group-hover:text-primary"
                }
              />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 rounded-lg border border-border bg-surface px-3 py-3 text-[11px] text-muted">
        <div className="mb-1 text-xs font-semibold text-text">
          Board-ready in minutes
        </div>
        <p>
          Use this view to prepare for weekly leadership reviews without
          chasing down exports.
        </p>
      </div>
    </aside>
  );
}

