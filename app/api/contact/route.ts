import { NextRequest, NextResponse } from "next/server";

// Email sending stub - replace with actual email service (Resend, SendGrid, etc.)
async function sendEmail(data: {
  name: string;
  company: string;
  email: string;
  projectType: string;
  message: string;
}) {
  // TODO: Implement email sending with Resend or similar service
  // Example with Resend:
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: 'Helix Contact Form <noreply@helix.co>',
  //   to: 'hello@helix.co',
  //   subject: `New Contact Form Submission from ${data.name}`,
  //   html: `
  //     <h2>New Contact Form Submission</h2>
  //     <p><strong>Name:</strong> ${data.name}</p>
  //     <p><strong>Company:</strong> ${data.company}</p>
  //     <p><strong>Email:</strong> ${data.email}</p>
  //     <p><strong>Project Type:</strong> ${data.projectType || 'Not specified'}</p>
  //     <p><strong>Message:</strong></p>
  //     <p>${data.message}</p>
  //   `,
  // });

  console.log("Email would be sent:", data);
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, company, email, projectType, message } = body;

    // Validation
    if (!name || !company || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
    }

    // Send email
    await sendEmail({ name, company, email, projectType, message });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
