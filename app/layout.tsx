import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

// <CHANGE> Updated metadata with Forge AI branding and Twitter cards
export const metadata: Metadata = {
  title: "Forge AI - AI-Powered Code Agents on Monad",
  description:
    "Unleash the power of AI agents that write, review, and optimize your code. Powered by the $FORGE token on Monad. Fair launch via Nad.fun.",
  generator: "v0.app",
  keywords: ["Forge AI", "AI agents", "Monad", "FORGE token", "code generation", "Vercel", "developer tools"],
  authors: [{ name: "Forge AI Team" }],
  creator: "Forge AI",
  publisher: "Forge AI",
  icons: {
    icon: "https://i.ibb.co/KxF6pLpL/image.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://forgev0.com",
    siteName: "Forge AI",
    title: "Forge AI - AI-Powered Code Agents on Monad",
    description:
      "Unleash the power of AI agents that write, review, and optimize your code. Powered by the $FORGE token on Monad. Fair launch via Nad.fun.",
    // <CHANGE> Replace with your actual OG image
    images: [
      {
        url: "https://i.ibb.co/fVxr8wvm/image.png",
        width: 1200,
        height: 630,
        alt: "Forge AI - AI-Powered Code Agents on Monad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge AI - AI-Powered Code Agents on Monad",
    description:
      "Unleash the power of AI agents that write, review, and optimize your code. Powered by the $FORGE token on Monad.",
    site: "@forgeai",
    // <CHANGE> Replace with your actual Twitter card image
    images: ["https://i.ibb.co/fVxr8wvm/image.png"],
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
