import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET() {
  try {
    await resend.emails.send({
      from: "Amma Eye Care <onboarding@resend.dev>",
      to: ["your-email@gmail.com"], // change this
      subject: "Test Email",
      html: "<p>Working ✅</p>",
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error(err)
    return Response.json({ success: false })
  }
}