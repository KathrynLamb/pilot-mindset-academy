export const runtime = "nodejs";


import { NextResponse } from "next/server";
import { kv } from "@vercel/kv";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const key = `waitlist:${email.toLowerCase()}`;

  try {
    const exists = await kv.get(key);
    if (exists) {
      return NextResponse.json({ message: "Already signed up" });
    }

    await kv.set(key, Date.now());
    console.log("About to send email to", email);

    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL || "Pilot Mindset <onboarding@resend.dev>",
      to: email,
      subject: "You're on the Pilot Mindset waitlist ✈️",
      html: `
        <h2>You're on the list!</h2>
        <p>Thanks for joining the Pilot Mindset Academy waitlist.</p>
        <p>We'll email you as soon as we launch.</p>
      `,
    });
    
    console.log("Resend result:", result);
    

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
    const { email } = await req.json();
  
    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }
  
    const key = `waitlist:${email.toLowerCase()}`;
    await kv.del(key);
  
    return NextResponse.json({ success: true });
  }
  
