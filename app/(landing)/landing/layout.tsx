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
    "Comprehensive eye care services including cataract surgery, LASIK, children's eye care, glaucoma treatment, and more. Expert ophthalmologists with advanced technology.",
  keywords: [
    "eye hospital",
    "eye care",
    "cataract surgery",
    "LASIK",
    "glaucoma",
    "retina specialist",
    "eye doctor",
    "Hyderabad",
  ],
  authors: [{ name: "Amma Eye Care Hospital" }],
  creator: "Amma Eye Care Hospital",
  publisher: "Amma Eye Care Hospital",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ammaeyecarehospital.com",
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
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },

  manifest: "/manifest.json",
}

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}