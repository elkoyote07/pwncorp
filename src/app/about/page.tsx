export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
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
            <a href="/about" className="text-white">
              About
            </a>
            <a href="/login" className="hover:text-white">
              Employee Portal
            </a>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold">About SecureCorp</h1>
        <p className="mt-4 text-slate-400 leading-7">
          SecureCorp Industries has been providing enterprise security solutions
          since 2010. Our team of dedicated security professionals works
          around the clock to protect our clients&apos; infrastructure.
        </p>
        <p className="mt-4 text-slate-400 leading-7">
          Our internal portal allows authorized employees to manage servers,
          run network diagnostics, and monitor system health across all
          environments.
        </p>

        <div className="mt-10 rounded-lg border border-slate-700 bg-slate-800 p-6">
          <h2 className="text-lg font-semibold">Contact IT Support</h2>
          <p className="mt-2 text-sm text-slate-400">
            For portal access issues, contact the IT Operations team.
          </p>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>Email: it-support@securecorp.local</li>
            <li>Internal Ext: 4501</li>
            <li>Helpdesk: helpdesk.securecorp.local</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
