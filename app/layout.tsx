import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import { Sidebar } from "./components/sidebar";
import { MobileNav } from "./components/mobile-nav";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Executive SaaS Dashboard",
  description:
    "Executive analytics dashboard prototype for B2B SaaS leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-text antialiased`}>
        <div className="flex min-h-screen bg-background">
          <Sidebar />
          <div className="flex min-h-screen flex-1 flex-col">
            <div className="flex min-h-screen w-full flex-col px-4 sm:px-6 lg:px-8 xl:px-10 max-w-[1200px] mx-auto">
              <header className="sticky top-0 z-20 -mx-4 border-b border-border bg-background/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 xl:-mx-10 xl:px-10">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="text-xs font-medium uppercase tracking-wide text-muted">
                      Executive Overview
                    </div>
                    <h1 className="text-lg font-semibold text-text">
                      Company Performance Snapshot
                    </h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="hidden items-center gap-3 sm:flex">
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-muted transition-colors hover:border-primary hover:text-text"
                      >
                        <span>Last 30 days</span>
                      </button>
                      <button
                        type="button"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface text-text-muted transition-colors hover:border-primary hover:text-text"
                        aria-label="View notifications"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      </button>
                      <div className="hidden items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 md:flex">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-surface-alt text-xs font-semibold text-text">
                          AC
                        </div>
                        <div className="flex flex-col">
                          <span className="text-xs font-medium text-text">
                            Alex Carter
                          </span>
                          <span className="text-[11px] font-medium uppercase tracking-wide text-accent">
                            CFO
                          </span>
                        </div>
                      </div>
                    </div>
                    <MobileNav />
                  </div>
                </div>
              </header>
              <main className="flex-1 py-6">
                {children}
              </main>
              <footer className="border-t border-border bg-background py-4 text-[11px] text-muted">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <span>Executive SaaS Dashboard · Internal prototype</span>
                  <span>Data is static and for demonstration purposes only.</span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
