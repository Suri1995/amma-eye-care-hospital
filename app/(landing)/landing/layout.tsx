import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ammaeyecarehospital.com"),

  title: {
    default: "Amma Eye Care Hospital - Advanced Eye Care Services",
    template: "%s | Amma Eye Care Hospital",
  },

  description:
    "Comprehensive eye care services including cataract surgery, LASIK, children's eye care, glaucoma treatment, and more.",

  keywords: [
    "eye hospital Hyderabad",
    "cataract surgery Hyderabad",
    "LASIK Hyderabad",
    "glaucoma treatment",
    "retina specialist",
  ],

  authors: [{ name: "Amma Eye Care Hospital" }],
  creator: "Amma Eye Care Hospital",
  publisher: "Amma Eye Care Hospital",

  alternates: {
    canonical: "https://ammaeyecarehospital.com",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Amma Eye Care Hospital",
    title: "Amma Eye Care Hospital - Advanced Eye Care Services",
    description:
      "Comprehensive eye care services including cataract surgery, LASIK, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Amma Eye Care Hospital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Amma Eye Care Hospital",
    description:
      "Advanced eye care services with expert doctors and modern technology.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: "#3B2E8C",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}