import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const key = `waitlist:${email.toLowerCase()}`;

  const exists = await kv.get(key);
  if (exists) {
    return NextResponse.json({ message: "Already signed up" });
  }

  await kv.set(key, Date.now());

  return NextResponse.json({ success: true });
}
