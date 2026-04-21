import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      )
    }

    // In production: send via Resend, Nodemailer, SendGrid, etc.
    // Example with Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@symphoniquelagos.ng',
    //   to: 'enquiries@symphoniquelagos.ng',
    //   subject: `[${subject}] New enquiry from ${name}`,
    //   text: `From: ${name} <${email}>\n\n${message}`,
    // })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 400))

    return NextResponse.json(
      { success: true, message: 'Enquiry received. We will respond within three working days.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    )
  }
}
