import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    // Validate email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    // Validate phone number if provided (Indian format)
    if (phone) {
      const phoneRegex = /^[6-9]\d{9}$/
      if (!phoneRegex.test(phone.replace(/\D/g, "").slice(-10))) {
        return NextResponse.json(
          { error: "Please enter a valid Indian phone number" },
          { status: 400 }
        )
      }
    }

    // Send email notification to hospital
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Amma Eye Care <contact@ammaeyecarehospital.com>",
        to: ["ammaeyecarehospital@gmail.com"],
        replyTo: email,
        subject: `New Contact Form: ${subject || "General Inquiry"} - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #059669 0%, #10b981 100%); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">New Contact Form Submission</h1>
            </div>
            <div style="padding: 30px; background: #f8fafc;">
              <h2 style="color: #059669; margin-top: 0;">Contact Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 120px;">Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                ${phone ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                ` : ""}
                ${subject ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Subject:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${subject}</td>
                </tr>
                ` : ""}
              </table>
              
              <h3 style="color: #059669; margin-top: 20px;">Message</h3>
              <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                <p style="margin: 0; color: #334155; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #d1fae5; border-radius: 8px;">
                <p style="margin: 0; color: #065f46; font-size: 14px;">
                  <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
                </p>
              </div>
            </div>
            <div style="padding: 20px; background: #059669; text-align: center;">
              <p style="color: white; margin: 0; font-size: 14px;">Amma Eye Care Hospital, L.B. Nagar, Hyderabad</p>
            </div>
          </div>
        `,
      })

      // Send confirmation email to sender
      await resend.emails.send({
        from: "Amma Eye Care <noreply@ammaeyecarehospital.com>",
        to: [email],
        subject: "Thank You for Contacting Amma Eye Care Hospital",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">Thank You for Reaching Out!</h1>
            </div>
            <div style="padding: 30px; background: #f8fafc;">
              <p style="font-size: 16px; color: #334155;">Dear ${name},</p>
              <p style="font-size: 16px; color: #334155;">
                Thank you for contacting Amma Eye Care Hospital. We have received your message and our team will respond within 24 hours.
              </p>
              
              <h3 style="color: #1e3a8a;">Your Message</h3>
              <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
                ${subject ? `<p style="margin: 0 0 10px 0;"><strong>Subject:</strong> ${subject}</p>` : ""}
                <p style="margin: 0; color: #334155; white-space: pre-wrap;">${message}</p>
              </div>
              
              <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
                <p style="margin: 0; color: #1e40af; font-size: 14px;">
                  For urgent matters, please call us directly at <a href="tel:+919246446244" style="color: #1e40af;">+91 9246446244</a>
                </p>
              </div>
            </div>
            <div style="padding: 20px; background: #1e3a8a; text-align: center;">
              <p style="color: white; margin: 0; font-size: 14px;">Amma Eye Care Hospital, L.B. Nagar, Hyderabad</p>
            </div>
          </div>
        `,
      })
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We will get back to you within 24 hours.",
    })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    )
  }
}
