"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [user, setUser] = useState("");
  const [target, setTarget] = useState("");
  const [pingResult, setPingResult] = useState("");
  const [pinging, setPinging] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check auth from cookie
    const cookies = document.cookie.split(";").reduce(
      (acc, c) => {
        const [k, v] = c.trim().split("=");
        acc[k] = v;
        return acc;
      },
      {} as Record<string, string>
    );

    const token = cookies["sc_session"];
    if (!token) {
      router.push("/login");
      return;
    }

    try {
      const decoded = JSON.parse(atob(token));
      if (decoded.user && decoded.role === "admin") {
        setAuthed(true);
        setUser(decoded.user);
      } else {
        router.push("/login");
      }
    } catch {
      router.push("/login");
    }
  }, [router]);

  async function handlePing(e: React.FormEvent) {
    e.preventDefault();
    if (!target.trim()) return;

    setPinging(true);
    setPingResult("");

    try {
      const res = await fetch("/api/ping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ target: target.trim() }),
      });

      const data = await res.json();
      setPingResult(data.output || data.error || "No output");
    } catch {
      setPingResult("Error: Failed to reach diagnostic API");
    } finally {
      setPinging(false);
    }
  }

  function handleLogout() {
    document.cookie = "sc_session=; path=/; max-age=0";
    router.push("/login");
  }

  if (!authed) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-900 text-slate-400">
        Authenticating...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Admin Nav */}
      <nav className="border-b border-slate-700 bg-slate-800">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 text-sm font-bold">
              SC
            </div>
            <span className="font-semibold">Admin Panel</span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="text-slate-400">
              Logged in as <span className="text-blue-400">{user}</span>
            </span>
            <button
              onClick={handleLogout}
              className="rounded bg-slate-700 px-3 py-1 text-slate-300 hover:bg-slate-600"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="mt-1 text-slate-400">
          SecureCorp Infrastructure Management
        </p>

        {/* Stats */}
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { label: "Servers Online", value: "12" },
            { label: "Active Alerts", value: "3" },
            { label: "Uptime", value: "99.7%" },
            { label: "Pending Updates", value: "7" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-lg border border-slate-700 bg-slate-800 p-4"
            >
              <div className="text-2xl font-bold text-blue-400">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Network Diagnostics */}
        <div className="mt-10 rounded-lg border border-slate-700 bg-slate-800 p-6">
          <h2 className="text-lg font-semibold">Network Diagnostics</h2>
          <p className="mt-1 text-sm text-slate-400">
            Test connectivity to internal and external hosts.
          </p>

          <form onSubmit={handlePing} className="mt-4 flex gap-3">
            <input
              type="text"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              placeholder="Enter hostname or IP (e.g. 8.8.8.8)"
              className="flex-1 rounded border border-slate-600 bg-slate-700 px-3 py-2 text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={pinging}
              className="rounded bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-700 disabled:opacity-50"
            >
              {pinging ? "Running..." : "Ping"}
            </button>
          </form>

          {pingResult && (
            <pre className="mt-4 max-h-80 overflow-auto rounded bg-black p-4 text-sm text-green-400">
              {pingResult}
            </pre>
          )}
        </div>

        {/* Server List */}
        <div className="mt-10 rounded-lg border border-slate-700 bg-slate-800 p-6">
          <h2 className="text-lg font-semibold">Server Inventory</h2>
          <table className="mt-4 w-full text-left text-sm">
            <thead className="border-b border-slate-600 text-slate-400">
              <tr>
                <th className="pb-2">Hostname</th>
                <th className="pb-2">IP Address</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Role</th>
              </tr>
            </thead>
            <tbody className="text-slate-300">
              {[
                ["web-prod-01", "10.0.1.10", "Online", "Web Server"],
                ["web-prod-02", "10.0.1.11", "Online", "Web Server"],
                ["db-prod-01", "10.0.2.10", "Online", "Database"],
                ["app-prod-01", "10.0.3.10", "Online", "Application"],
                ["monitor-01", "10.0.4.10", "Degraded", "Monitoring"],
              ].map(([host, ip, status, role]) => (
                <tr key={host} className="border-b border-slate-700/50">
                  <td className="py-2 font-mono text-blue-400">{host}</td>
                  <td className="py-2 font-mono">{ip}</td>
                  <td className="py-2">
                    <span
                      className={`rounded px-2 py-0.5 text-xs font-medium ${status === "Online" ? "bg-green-900/50 text-green-400" : "bg-yellow-900/50 text-yellow-400"}`}
                    >
                      {status}
                    </span>
                  </td>
                  <td className="py-2">{role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
