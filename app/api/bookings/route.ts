import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function generateId() {
  return `AEC-${Date.now().toString().slice(-6)}-${Math.floor(
    100 + Math.random() * 900
  )}`
}

// Helper function for security
function escapeHtml(str: string): string {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const {
      firstName,
      lastName,
      email,
      phone,
      appointmentDate,
      appointmentTime,
      message,
      location,
    } = data

    // Validation
    if (!firstName || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing required fields",
        },
        { status: 400 }
      )
    }

    const id = generateId()
    
    // Escape all dynamic content
    const safeFirstName = escapeHtml(firstName)
    const safeLastName = escapeHtml(lastName)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeAppointmentDate = escapeHtml(appointmentDate || "Not Selected")
    const safeAppointmentTime = escapeHtml(appointmentTime || "Not Selected")
    const safeLocation = escapeHtml(location || "Not Selected")
    const safeMessage = message && message.trim() !== "" ? escapeHtml(message) : "No message provided"

    console.log("📥 New Booking Request:", data)

    // Generate unique idempotency key to prevent duplicate emails
    const idempotencyKey = `booking-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`

    // =========================
    // 1. EMAIL TO HOSPITAL
    // =========================
    await resend.emails.send({
      from: "Amma Eye Care <noreply@ammaeyecarehospital.com>",
      to: ["ammaeyecarehospital@gmail.com"],
      replyTo: email,
      subject: `🔔 New Booking Request - ${id}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Booking Request</title>
          <style>
            @media only screen and (max-width: 600px) {
              .content-padding { padding: 25px 20px !important; }
              .action-buttons { flex-direction: column !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f0f4f8; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 20px; overflow: hidden; box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);">
            
            <div style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); text-align: center; padding: 35px 30px 25px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 26px; font-weight: 600;">New Booking Request</h1>
              <p style="color: #c8d9f0; margin: 8px 0 0; font-size: 14px;">Action Required - Pending Confirmation</p>
            </div>

            <div class="content-padding" style="padding: 35px 30px;">
              <div style="background: linear-gradient(135deg, #f0f4f8 0%, #e8eef5 100%); border-radius: 12px; padding: 15px; text-align: center; margin-bottom: 30px;">
                <span style="font-size: 12px; color: #4a5568; font-weight: 600;">Booking ID</span>
                <h2 style="margin: 5px 0 0; color: #2a5298; font-size: 22px;">${id}</h2>
              </div>

              <div style="margin-bottom: 30px;">
                <h3 style="color: #1e3c72; margin: 0 0 15px; font-size: 16px;">👤 Patient Information</h3>
                <div style="background: #f9fbfd; border-radius: 12px; padding: 20px;">
                  <p><strong>Full Name:</strong> ${safeFirstName} ${safeLastName}</p>
                  <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
                  <p><strong>Phone:</strong> <a href="tel:${safePhone}">${safePhone}</a></p>
                  <p><strong>Preferred Location:</strong> ${safeLocation}</p>
                </div>
              </div>

              <div style="margin-bottom: 30px;">
                <h3 style="color: #1e3c72; margin: 0 0 15px; font-size: 16px;">📅 Booking Details</h3>
                <div style="background: #fff9f0; border-radius: 12px; padding: 20px;">
                  <p><strong>Preferred Date:</strong> ${safeAppointmentDate}</p>
                  <p><strong>Preferred Time:</strong> ${safeAppointmentTime}</p>
                </div>
              </div>

              ${safeMessage !== "No message provided" ? `
              <div style="margin-bottom: 30px;">
                <h3 style="color: #1e3c72; margin: 0 0 15px; font-size: 16px;">💬 Patient Message</h3>
                <div style="background: #f0faf0; border-radius: 12px; padding: 20px;">
                  <p style="margin: 0;">${safeMessage}</p>
                </div>
              </div>
              ` : ''}

              <div class="action-buttons" style="display: flex; gap: 12px; margin-top: 30px;">
                <a href="tel:${safePhone}" style="flex: 1; background: #2a5298; color: white; text-align: center; padding: 12px; border-radius: 10px; text-decoration: none;">📞 Call Patient</a>
                <a href="mailto:${safeEmail}" style="flex: 1; background: #48bb78; color: white; text-align: center; padding: 12px; border-radius: 10px; text-decoration: none;">✉️ Send Email</a>
              </div>
            </div>

            <div style="border-top: 1px solid #e2e8f0; padding: 20px; background: #f7fafc; text-align: center;">
              <p style="margin: 0; color: #a0aec0; font-size: 11px;">© 2024 Amma Eye Care Hospital. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
    }, {
      idempotencyKey: `hospital-${idempotencyKey}`
    });

    // =========================
    // 2. THANK YOU EMAIL TO PATIENT
    // =========================
    await resend.emails.send({
      from: "Amma Eye Care <noreply@ammaeyecarehospital.com>",
      to: [email],
      subject: `✨ Booking Confirmed - ${firstName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Booking Confirmation</title>
          <style>
            @media only screen and (max-width: 600px) {
              .button-group { flex-direction: column !important; }
            }
          </style>
        </head>
        <body style="margin: 0; padding: 0; background-color: #e0f2fe; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 24px; overflow: hidden;">
            
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); text-align: center; padding: 50px 30px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 32px;">Thank You, ${safeFirstName}!</h1>
              <p style="color: #e9d5ff; margin: 10px 0 0;">Your booking request has been received</p>
            </div>

            <div style="padding: 40px 30px;">
              <div style="background: linear-gradient(135deg, #667eea10 0%, #764ba210 100%); border-radius: 16px; padding: 20px; text-align: center; margin-bottom: 30px;">
                <span style="color: #667eea; font-size: 12px;">Booking ID</span>
                <p style="font-size: 20px; font-weight: 700; color: #4c51bf; margin: 8px 0 0;">${id}</p>
              </div>

              <div style="margin-bottom: 30px;">
                <h3 style="color: #2d3748;">📋 Booking Summary</h3>
                <div style="background: #f7fafc; border-radius: 12px; padding: 20px;">
                  <p><strong>Preferred Date:</strong> ${safeAppointmentDate}</p>
                  <p><strong>Preferred Time:</strong> ${safeAppointmentTime}</p>
                  <p><strong>Preferred Location:</strong> ${safeLocation}</p>
                </div>
              </div>

              <div style="margin-bottom: 30px;">
                <h3 style="color: #2d3748;">📝 What Happens Next?</h3>
                <div style="background: #f0f9ff; border-radius: 12px; padding: 20px;">
                  <p>1. Our team will review your booking within 2-4 hours</p>
                  <p>2. You'll receive a confirmation call from our support team</p>
                  <p>3. SMS reminder will be sent 24 hours before your appointment</p>
                </div>
              </div>

              ${safeMessage !== "No message provided" ? `
              <div style="margin-bottom: 30px;">
                <h3 style="color: #2d3748;">💬 Your Message</h3>
                <div style="background: #f0faf0; border-radius: 12px; padding: 20px;">
                  <p style="margin: 0; font-style: italic;">"${safeMessage}"</p>
                </div>
              </div>
              ` : ''}

              <div class="button-group" style="display: flex; gap: 12px; justify-content: center;">
                <a href="tel:+919876543210" style="background: #667eea; color: white; padding: 12px 24px; border-radius: 10px; text-decoration: none;">📞 Contact Us</a>
                <a href="#" style="background: #48bb78; color: white; padding: 12px 24px; border-radius: 10px; text-decoration: none;">📍 Get Directions</a>
              </div>
            </div>

            <div style="background: #f7fafc; text-align: center; padding: 25px; border-top: 1px solid #e2e8f0;">
              <p style="margin: 0; font-weight: 600;">Amma Eye Care Hospital</p>
              <p style="margin: 5px 0 0; color: #718096; font-size: 12px;">Your Trusted Partner in Eye Care</p>
            </div>
          </div>
        </body>
        </html>
      `
    }, {
      idempotencyKey: `patient-${idempotencyKey}`
    });

    console.log("📤 Both Booking Emails Sent Successfully")

    return NextResponse.json({
      success: true,
      id,
      message: "Booking submitted successfully",
    })

  } catch (error) {
    console.error("❌ API ERROR:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Internal Server Error",
      },
      { status: 500 }
    )
  }
}