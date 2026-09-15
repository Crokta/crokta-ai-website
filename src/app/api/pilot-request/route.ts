import { NextResponse } from "next/server";

/* Receives pilot / contact requests from the website form.
   At this stage it validates and logs a redacted summary. Wire to CRM or email
   (Termii / Resend / HubSpot) by setting PILOT_WEBHOOK_URL. */

type Payload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  country?: string;
  cameras?: string;
  segment?: string;
  intent?: string;
  message?: string;
  website?: string; // honeypot
};

const required: (keyof Payload)[] = ["name", "company", "email", "country"];

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  if (body.website) {
    // Honeypot filled: pretend success, drop silently.
    return NextResponse.json({ ok: true });
  }

  const missing = required.filter((k) => !body[k] || String(body[k]).trim().length === 0);
  if (missing.length) {
    return NextResponse.json({ ok: false, error: `Missing: ${missing.join(", ")}` }, { status: 422 });
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(String(body.email))) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address" }, { status: 422 });
  }

  const webhook = process.env.PILOT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ source: "crokta.ai", receivedAt: new Date().toISOString(), ...body }),
      });
      if (!res.ok) throw new Error(`webhook ${res.status}`);
    } catch (err) {
      console.error("pilot-request: webhook delivery failed", err);
      return NextResponse.json({ ok: false, error: "Could not deliver your request. Please email us instead." }, { status: 502 });
    }
  } else {
    console.info("pilot-request", { intent: body.intent, country: body.country, segment: body.segment, cameras: body.cameras });
  }

  return NextResponse.json({ ok: true });
}
