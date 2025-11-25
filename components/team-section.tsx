"use client"

import { useEffect } from "react"

const TWEET_ID = "1990540011931120121" // e.g., "1234567890123456789"

export function TeamSection() {
  useEffect(() => {
    // Load Twitter widget script
    const script = document.createElement("script")
    script.src = "https://platform.twitter.com/widgets.js"
    script.async = true
    script.charset = "utf-8"
    document.body.appendChild(script)

    return () => {
      const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-4">
            <span className="text-muted-foreground text-sm">Meet the Team</span>
          </div>
          <h2 className="text-foreground text-3xl md:text-4xl font-semibold mb-4">Built by Engineers at Vercel</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Forge AI is led by experienced systems engineers from Vercel, bringing enterprise-grade infrastructure
            expertise to the Solana ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Team Member Card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[#14F195] flex items-center justify-center text-2xl font-bold text-background shrink-0">
                ?
              </div>
              <div className="flex-1">
                <h3 className="text-foreground text-lg font-semibold">Your Name</h3>
                <p className="text-primary text-sm font-medium">Systems Engineer @ Vercel</p>
                <p className="text-muted-foreground text-sm mt-1">Project Lead, Forge AI</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leading Vercel's first venture into the Solana ecosystem. Building AI-powered developer tools that
                leverage blockchain for transparent, community-driven development.
              </p>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                @yourhandle
              </a>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden">
            <h4 className="text-foreground text-sm font-medium mb-4">Latest Announcement</h4>
            <div className="min-h-[200px]">
              {/* This will render the actual tweet - just change TWEET_ID at the top of the file */}
              <blockquote className="twitter-tweet" data-theme="dark" data-conversation="none">
                <a href={`https://twitter.com/x/status/${TWEET_ID}`}>Loading tweet...</a>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
