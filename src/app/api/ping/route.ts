import { NextRequest, NextResponse } from "next/server";
import { execSync } from "child_process";

export async function POST(request: NextRequest) {
  // Check for auth cookie
  const token = request.cookies.get("sc_session")?.value;
  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const decoded = JSON.parse(Buffer.from(token, "base64").toString());
    if (decoded.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }
  } catch {
    return NextResponse.json({ error: "Invalid session" }, { status: 401 });
  }

  const body = await request.json();
  const { target } = body;

  if (!target) {
    return NextResponse.json(
      { error: "Target hostname or IP is required" },
      { status: 400 }
    );
  }

  // VULNERABLE: unsanitized input passed directly to shell command
  const isWindows = process.platform === "win32";
  const cmd = isWindows
    ? `ping -n 2 ${target}`
    : `ping -c 2 ${target}`;

  try {
    const output = execSync(cmd, { timeout: 10000, encoding: "utf-8" });
    return NextResponse.json({ output });
  } catch (err: unknown) {
    const msg =
      err instanceof Error ? (err as { stdout?: string }).stdout || err.message : "Command failed";
    return NextResponse.json({ output: msg });
  }
}
