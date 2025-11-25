import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata with Forge AI branding and Twitter cards
export const metadata: Metadata = {
  title: "Forge AI - AI-Powered Code Agents on Solana",
  description:
    "Unleash the power of AI agents that write, review, and optimize your code. Powered by the $FORGE token on Solana. Fair launch via Pump.fun.",
  generator: "v0.app",
  keywords: ["Forge AI", "AI agents", "Solana", "FORGE token", "code generation", "Vercel", "developer tools"],
  authors: [{ name: "Forge AI Team" }],
  creator: "Forge AI",
  publisher: "Forge AI",
  icons: {
    icon: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forgeai.dev",
    siteName: "Forge AI",
    title: "Forge AI - AI-Powered Code Agents on Solana",
    description:
      "Unleash the power of AI agents that write, review, and optimize your code. Powered by the $FORGE token on Solana. Fair launch via Pump.fun.",
    // <CHANGE> Replace with your actual OG image
    images: [
      {
        url: "https://i.ibb.co/jqnnCXK/IMG-0109.jpg",
        width: 1200,
        height: 630,
        alt: "Forge AI - AI-Powered Code Agents on Solana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge AI - AI-Powered Code Agents on Solana",
    description:
      "Unleash the power of AI agents that write, review, and optimize your code. Powered by the $FORGE token on Solana.",
    site: "@forgeai",
    // <CHANGE> Replace with your actual Twitter card image
    images: ["https://i.ibb.co/jqnnCXK/IMG-0109.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
