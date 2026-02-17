import { NextResponse } from "next/server";
import os from "os";

// DEBUG ENDPOINT - TODO: disable before production deployment
export async function GET() {
  return NextResponse.json({
    status: "debug_enabled",
    server: {
      hostname: os.hostname(),
      platform: os.platform(),
      arch: os.arch(),
      uptime: os.uptime(),
      nodeVersion: process.version,
      cwd: process.cwd(),
    },
    app: {
      version: "3.2.1-internal",
      environment: "development",
      buildDate: "2024-11-03",
      configPath: "/etc/securecorp/app.conf",
      backupPath: "/backup/",
      notes:
        "Backup directory contains legacy config exports. Migrate to vault by Q1.",
    },
    auth: {
      provider: "local",
      sessionDriver: "cookie",
      tokenName: "sc_session",
    },
  });
}
