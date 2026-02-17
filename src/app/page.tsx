export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Nav */}
      <nav className="border-b border-slate-700 bg-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-sm font-bold">
              SC
            </div>
            <span className="text-lg font-semibold">SecureCorp</span>
          </div>
          <div className="flex gap-6 text-sm text-slate-300">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/about" className="hover:text-white">
              About
            </a>
            {/* TODO: remove before prod - /admin */}
            <a href="/login" className="hover:text-white">
              Employee Portal
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main className="mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-bold leading-tight">
          Welcome to <span className="text-blue-400">SecureCorp</span>
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-400">
          Leading provider of enterprise security solutions. Our internal portal
          provides employees with access to critical infrastructure management
          tools.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
            <h3 className="text-lg font-semibold text-blue-400">
              Infrastructure
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Manage and monitor your server infrastructure from a single
              dashboard.
            </p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
            <h3 className="text-lg font-semibold text-blue-400">
              Network Tools
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              Diagnostic utilities for network troubleshooting and monitoring.
            </p>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-800 p-6">
            <h3 className="text-lg font-semibold text-blue-400">Reports</h3>
            <p className="mt-2 text-sm text-slate-400">
              Generate and view security audit reports and compliance documents.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-700 py-6 text-center text-xs text-slate-500">
        {/* v3.2.1-internal | Build 2024.11.03 | Debug mode: enabled */}
        &copy; 2024 SecureCorp Industries. All rights reserved.
      </footer>
    </div>
  );
}
