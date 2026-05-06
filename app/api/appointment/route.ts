import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

function generateId() {
  return `AEC-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`
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
    } = data

    // Basic validation
    if (!firstName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      )
    }

    const id = generateId()
    const safeMessage = message || "No message provided"

    console.log("📥 New Lead Received:", data)

    // ✅ Email to hospital
    const result1 = await resend.emails.send({
      from: "Amma Eye Care <onboarding@resend.dev>",
      to: ["ammaeyecarehospital@gmail.com"],
      replyTo: email, // allows direct reply to patient
      subject: `New Appointment - ${id}`,
      html: `
        <h2>New Appointment</h2>
        <p><b>ID:</b> ${id}</p>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Date:</b> ${appointmentDate}</p>
        <p><b>Time:</b> ${appointmentTime}</p>
        <p><b>Message:</b> ${safeMessage}</p>
      `,
    })

    console.log("📤 Hospital email result:", result1)

    // ✅ Email to customer
    const result2 = await resend.emails.send({
      from: "Amma Eye Care <onboarding@resend.dev>",
      to: ["ammaeyecarehospital@gmail.com"],
      subject: "Appointment Received",
      html: `
        <h2>Appointment Confirmation</h2>
        <p>Your Appointment ID: <b>${id}</b></p>
        <p>We will contact you shortly.</p>
      `,
    })

    console.log("📤 User email result:", result2)

    return NextResponse.json({ success: true, id })

  } catch (e) {
    console.error("❌ API ERROR:", e)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}