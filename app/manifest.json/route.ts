import { NextResponse } from 'next/server'

export async function GET() {  // ← Named export, not default
  const manifest = {
    name: "Amma Eye Care Hospital",
    short_name: "Amma Eye Care",
    description: "Advanced eye care services including cataract, LASIK, and routine checkups in Hyderabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3B2E8C",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
  
  return NextResponse.json(manifest)
}