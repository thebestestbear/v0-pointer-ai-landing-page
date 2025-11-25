"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Check, Copy, Users } from "lucide-react"

export function TokenSection() {
  const [copied, setCopied] = useState(false)
  const contractAddress = "ADDYTBA"

  const copyToClipboard = () => {
    if (contractAddress !== "Coming Soon") {
      navigator.clipboard.writeText(contractAddress)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <section
      id="token-section"
      className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent"
    >
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        {/* Background glow effect */}
        <div className="w-[400px] h-[400px] absolute top-[100px] right-[100px] bg-primary/15 blur-[120px] z-0 rounded-full" />
        <div className="w-[300px] h-[300px] absolute bottom-[200px] left-[50px] bg-[#14F195]/10 blur-[100px] z-0 rounded-full" />

        <div className="self-stretch flex flex-col justify-center items-center gap-12 z-10">
          {/* Header */}
          <div className="flex flex-col justify-start items-center gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14F195]/30 bg-[#14F195]/10">
              <svg className="w-4 h-4 text-[#14F195]" viewBox="0 0 128 128" fill="currentColor">
                <path d="M93.94 42.63H37.83a3.4 3.4 0 01-2.41-5.81l13.86-13.86a3.39 3.39 0 012.41-1h56.11a3.4 3.4 0 012.41 5.81L96.35 41.63a3.39 3.39 0 01-2.41 1zM37.83 55.87h56.11a3.4 3.4 0 012.41 5.81L82.49 75.54a3.39 3.39 0 01-2.41 1H24a3.4 3.4 0 01-2.41-5.81l13.83-13.86a3.39 3.39 0 012.41-1zM93.94 89.37H37.83a3.4 3.4 0 00-2.41 5.81l13.86 13.86a3.39 3.39 0 002.41 1h56.11a3.4 3.4 0 002.41-5.81l-13.86-13.86a3.39 3.39 0 00-2.41-1z" />
              </svg>
              <span className="text-[#14F195] text-sm font-medium">Built on Solana</span>
            </div>
            <h2 className="w-full max-w-[700px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              The $FORGE Token
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Powering the future of AI-assisted development. Hold $FORGE to unlock premium features, governance rights,
              and exclusive rewards.
            </p>
          </div>

          <div className="w-full max-w-[600px] p-4 rounded-xl border border-primary/30 bg-primary/10 backdrop-blur-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-foreground font-semibold mb-1">Early Supporter Benefits</h4>
                <p className="text-muted-foreground text-sm">
                  Join the waitlist now for priority beta access, potential airdrops, and exclusive community rewards
                  when $FORGE launches.
                </p>
              </div>
            </div>
          </div>

          

          <div className="w-full max-w-[900px] p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <div className="flex flex-col items-center gap-2 mb-6">
              <h3 className="text-foreground text-xl md:text-2xl font-semibold text-center">Tokenomics</h3>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14F195]/30 bg-[#14F195]/10">
                <span className="text-[#14F195] text-xs font-medium">Fair Launch via Pump.fun</span>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
              <div className="text-center p-4 rounded-xl bg-white/5">
                <div className="text-2xl md:text-3xl font-bold text-foreground">1B</div>
                <div className="text-muted-foreground text-sm">Total Supply</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <div className="text-2xl md:text-3xl font-bold text-[#14F195]">95%</div>
                <div className="text-muted-foreground text-sm">Community</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5 relative">
                <div className="text-2xl md:text-3xl font-bold text-primary">2.5%</div>
                <div className="text-muted-foreground text-sm">Dev</div>
                <div className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-medium">
                  Locked
                </div>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/5">
                <div className="text-2xl md:text-3xl font-bold text-foreground">2.5%</div>
                <div className="text-muted-foreground text-sm">Ecosystem</div>
              </div>
            </div>
            <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden flex">
              <div className="h-full bg-[#14F195] w-[95%]" />
              <div className="h-full bg-primary w-[2.5%]" />
              <div className="h-full bg-foreground/60 w-[2.5%]" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#14F195]" />
                <span className="text-muted-foreground">Community (Fair Launch)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-muted-foreground">Dev (Locked & Vested)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-foreground/60" />
                <span className="text-muted-foreground">Ecosystem</span>
              </div>
            </div>
          </div>

          {/* Token utility cards */}
          <div className="w-full max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-foreground text-lg font-semibold">Premium Access</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Unlock advanced AI features, priority processing, and higher usage limits with $FORGE tokens.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-[#14F195]/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#14F195]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-foreground text-lg font-semibold">Governance</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Shape the future of Forge AI by voting on new features, integrations, and platform direction.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 009.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-foreground text-lg font-semibold">Early Rewards</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Early token holders receive exclusive airdrops, beta access, and special community benefits.
              </p>
            </div>
          </div>

          <div className="w-full max-w-[900px] p-6 md:p-8 rounded-2xl border border-[#14F195]/20 bg-[#14F195]/5 backdrop-blur-sm">
            <h3 className="text-foreground text-xl md:text-2xl font-semibold mb-6 text-center">How to Get $FORGE</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#14F195]/20 flex items-center justify-center text-[#14F195] font-bold text-xl">
                  1
                </div>
                <h4 className="text-foreground font-medium">Get a Solana Wallet</h4>
                <p className="text-muted-foreground text-sm">
                  Download Phantom, Solflare, or your preferred Solana wallet
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#14F195]/20 flex items-center justify-center text-[#14F195] font-bold text-xl">
                  2
                </div>
                <h4 className="text-foreground font-medium">Fund with SOL</h4>
                <p className="text-muted-foreground text-sm">
                  Purchase SOL from an exchange and transfer to your wallet
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#14F195]/20 flex items-center justify-center text-[#14F195] font-bold text-xl">
                  3
                </div>
                <h4 className="text-foreground font-medium">Buy on Pump.fun</h4>
                <p className="text-muted-foreground text-sm">Visit Pump.fun and swap SOL for $FORGE at fair launch</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <Button size="lg" className="gap-2 bg-[#14F195] text-black hover:bg-[#14F195]/90" asChild>
              <a href="https://pump.fun/" target="_blank" rel="noopener noreferrer">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Trade on Pump.fun
              </a>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 bg-transparent" asChild>
              <a href="https://solscan.io/" target="_blank" rel="noopener noreferrer">
                View on Solscan
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
