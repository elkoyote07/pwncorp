import { NextRequest, NextResponse } from "next/server";

const VALID_USER = "admin";
const VALID_PASS = "S3cur3C0rp!2024";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { username, password } = body;

  if (!username || !password) {
    return NextResponse.json(
      { error: "Username and password are required" },
      { status: 400 }
    );
  }

  if (username.trim() === VALID_USER && password.trim() === VALID_PASS) {
    // Create a simple base64 "token" (intentionally weak auth)
    const token = Buffer.from(
      JSON.stringify({ user: username, role: "admin", ts: Date.now() })
    ).toString("base64");

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      user: username,
    });

    response.cookies.set("sc_session", token, {
      httpOnly: false, // intentionally insecure
      path: "/",
      maxAge: 3600,
    });

    return response;
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  );
}
