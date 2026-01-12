import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, message } = data || {};

    if (!name || !email || !message || message.length < 10) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // Here you would send to an email service / CRM. For demo we just log.
    console.log('Contact request', { name, email, message });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
