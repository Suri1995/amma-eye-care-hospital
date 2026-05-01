import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, phone, email, date, time, doctor, message, reportFile } = body

    // Validate required fields
    if (!name || !phone || !date || !time) {
      return NextResponse.json(
        { error: "Name, phone, date, and time are required" },
        { status: 400 }
      )
    }

    // Validate phone number (Indian format)
    const phoneRegex = /^[6-9]\d{9}$/
    if (!phoneRegex.test(phone.replace(/\D/g, "").slice(-10))) {
      return NextResponse.json(
        { error: "Please enter a valid Indian phone number" },
        { status: 400 }
      )
    }

    // Validate email if provided
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    // Format the appointment data
    const appointmentDate = new Date(date).toLocaleDateString("en-IN", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })

    // Send email notification to hospital
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Amma Eye Care <appointments@ammaeyecarehospital.com>",
        to: ["ammaeyecarehospital@gmail.com"],
        replyTo: email || undefined,
        subject: `New Appointment Request - ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 20px; text-align: center;">
              <h1 style="color: white; margin: 0;">New Appointment Request</h1>
            </div>
            <div style="padding: 30px; background: #f8fafc;">
              <h2 style="color: #1e3a8a; margin-top: 0;">Patient Details</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold; width: 140px;">Name:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Phone:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="tel:${phone}">${phone}</a></td>
                </tr>
                ${email ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Email:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;"><a href="mailto:${email}">${email}</a></td>
                </tr>
                ` : ""}
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Preferred Date:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${appointmentDate}</td>
                </tr>
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Preferred Time:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${time}</td>
                </tr>
                ${doctor ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Preferred Doctor:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${doctor}</td>
                </tr>
                ` : ""}
                ${message ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Message:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">${message}</td>
                </tr>
                ` : ""}
                ${reportFile ? `
                <tr>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: bold;">Report Attached:</td>
                  <td style="padding: 10px; border-bottom: 1px solid #e2e8f0;">Yes</td>
                </tr>
                ` : ""}
              </table>
              <div style="margin-top: 20px; padding: 15px; background: #dbeafe; border-radius: 8px;">
                <p style="margin: 0; color: #1e40af; font-size: 14px;">
                  <strong>Action Required:</strong> Please contact the patient to confirm the appointment.
                </p>
              </div>
            </div>
            <div style="padding: 20px; background: #1e3a8a; text-align: center;">
              <p style="color: white; margin: 0; font-size: 14px;">Amma Eye Care Hospital, L.B. Nagar, Hyderabad</p>
            </div>
          </div>
        `,
      })

      // Send confirmation email to patient if email provided
      if (email) {
        await resend.emails.send({
          from: "Amma Eye Care <noreply@ammaeyecarehospital.com>",
          to: [email],
          subject: "Appointment Request Received - Amma Eye Care Hospital",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <div style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 20px; text-align: center;">
                <h1 style="color: white; margin: 0;">Appointment Request Received</h1>
              </div>
              <div style="padding: 30px; background: #f8fafc;">
                <p style="font-size: 16px; color: #334155;">Dear ${name},</p>
                <p style="font-size: 16px; color: #334155;">
                  Thank you for choosing Amma Eye Care Hospital. We have received your appointment request for:
                </p>
                <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border: 1px solid #e2e8f0;">
                  <p style="margin: 5px 0;"><strong>Date:</strong> ${appointmentDate}</p>
                  <p style="margin: 5px 0;"><strong>Time:</strong> ${time}</p>
                  ${doctor ? `<p style="margin: 5px 0;"><strong>Doctor:</strong> ${doctor}</p>` : ""}
                </div>
                <p style="font-size: 16px; color: #334155;">
                  Our team will contact you shortly at <strong>${phone}</strong> to confirm your appointment.
                </p>
                <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px;">
                  <p style="margin: 0; color: #92400e; font-size: 14px;">
                    For any queries, call us at <a href="tel:+919246446244" style="color: #92400e;">+91 9246446244</a>
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
    }

    return NextResponse.json({
      success: true,
      message: "Appointment request submitted successfully. We will contact you shortly to confirm.",
    })
  } catch (error) {
    console.error("Appointment API error:", error)
    return NextResponse.json(
      { error: "Failed to submit appointment request. Please try again." },
      { status: 500 }
    )
  }
}
