import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function buildNotificationHTML(email: string, submittedAt: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#070b16;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#070b16;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#0c1324;border-radius:20px;overflow:hidden;border:1px solid #1e2d4a;">
        <tr>
          <td style="background:linear-gradient(135deg,#0d1b38,#091525);padding:28px 32px;border-bottom:1px solid #1e2d4a;">
            <p style="margin:0;font-size:11px;font-family:monospace;color:#2dd4bf;letter-spacing:2px;text-transform:uppercase;">ZynTech Labs</p>
            <h1 style="margin:8px 0 0;font-size:20px;font-weight:900;color:#ffffff;">📩 New Newsletter Subscriber</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:28px 32px;">
            <p style="margin:0 0 4px;font-size:10px;font-family:monospace;color:#64748b;letter-spacing:1px;text-transform:uppercase;">Email</p>
            <a href="mailto:${email}" style="margin:0;font-size:16px;font-weight:700;color:#2dd4bf;text-decoration:none;">${email}</a>
            <p style="margin:20px 0 0;font-size:11px;color:#475569;font-family:monospace;">Submitted: ${submittedAt}</p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ error: 'A valid email is required.' }, { status: 400 });
    }

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || 'jerryaitech17@gmail.com';
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'ZynTech Labs <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: email,
      subject: `📩 New Newsletter Subscriber: ${email}`,
      html: buildNotificationHTML(email, submittedAt),
    });

    return NextResponse.json({ success: true, message: 'Subscribed successfully.' });
  } catch (error) {
    console.error('Subscribe API Error:', error);
    return NextResponse.json({ error: 'Failed to subscribe. Please try again later.' }, { status: 500 });
  }
}
