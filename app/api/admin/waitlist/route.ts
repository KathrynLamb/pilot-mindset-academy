import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";

export async function GET() {
  try {
    const keys = await kv.keys("waitlist:*");

    const items = await Promise.all(
      keys.map(async (key) => {
        const ts = await kv.get<number>(key);
        return {
          email: key.replace("waitlist:", ""),
          createdAt: ts,
        };
      })
    );

    return NextResponse.json({ items });
  } catch (err) {
    console.error("KV error:", err);
    return NextResponse.json({ error: "Storage error" }, { status: 500 });
  }
}
