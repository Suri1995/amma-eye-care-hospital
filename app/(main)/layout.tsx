import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ammaeyecarehospital.com"),
  title: {
    default: "Amma Eye Care Hospital - Advanced Eye Care Services",
    template: "%s | Amma Eye Care Hospital"
  },
  description: "Comprehensive eye care services including cataract surgery, LASIK, children's eye care, glaucoma treatment, and more. Expert ophthalmologists with advanced technology. Cashless facility available.",
  keywords: ["eye care", "ophthalmology", "cataract surgery", "LASIK", "glaucoma", "eye hospital", "Hyderabad", "eye specialist"],
  authors: [{ name: "Amma Eye Care Hospital" }],
  creator: "Amma Eye Care Hospital",
  publisher: "Amma Eye Care Hospital",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ammaeyecarehospital.com",
    siteName: "Amma Eye Care Hospital",
    title: "Amma Eye Care Hospital - Advanced Eye Care Services",
    description: "Comprehensive eye care services including cataract surgery, LASIK, children's eye care, and more. Expert ophthalmologists with advanced technology.",
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
    title: "Amma Eye Care Hospital - Advanced Eye Care Services",
    description: "Comprehensive eye care services including cataract surgery, LASIK, children's eye care, and more.",
    creator: "@AmmaEyeCare",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.webp", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://ammaeyecarehospital.com",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a8a" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md">
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileCTA />
        <Analytics />
      </body>
    </html>
  )
}
