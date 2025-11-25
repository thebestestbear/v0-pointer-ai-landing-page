"use client"

import { Twitter, Github } from "lucide-react"
import { ForgeLogo } from "@/components/forge-logo"

export function FooterSection() {
  return (
    <footer className="w-full max-w-[1320px] mx-auto px-5 flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 py-10 md:py-[70px]">
      {/* Left Section: Logo, Description, Social Links */}
      <div className="flex flex-col justify-start items-start gap-8 p-4 md:p-8">
        <div className="flex gap-3 items-center justify-center">
          <ForgeLogo className="w-7 h-7 text-primary" />
          <div className="text-center text-foreground text-xl font-semibold leading-4">Forge AI</div>
          <span className="text-xs font-medium bg-primary/20 text-primary px-2 py-0.5 rounded-full">Beta</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground text-sm">Built by engineers at</span>
          <svg className="h-4 text-foreground" viewBox="0 0 76 65" fill="currentColor">
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
          </svg>
          <span className="text-foreground text-sm font-medium">Vercel</span>
        </div>
        <div className="flex justify-start items-start gap-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="w-5 h-5 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Twitter className="w-full h-full text-muted-foreground hover:text-foreground transition-colors" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-5 h-5 flex items-center justify-center hover:opacity-80 transition-opacity"
          >
            <Github className="w-full h-full text-muted-foreground hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end gap-4 p-4 md:p-8">
        <p className="text-muted-foreground text-xs max-w-[300px] text-right">
          $FORGE is a utility token. Not financial advice. DYOR.
        </p>
        <p className="text-muted-foreground text-sm">© 2025 Forge AI. All rights reserved.</p>
      </div>
    </footer>
  )
}
