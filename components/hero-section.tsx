"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import Link from "next/link"
import { ForgeLogo } from "./forge-logo"
import { WaitlistModal } from "./waitlist-modal"

export function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4
         w-full min-h-[500px] md:w-[1220px] md:min-h-[550px] lg:min-h-[600px] md:px-0"
    >
      {/* SVG Background */}
      <div className="absolute inset-0 z-0">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1220 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <g clipPath="url(#clip0_hero)">
            <mask
              id="mask0_hero"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="10"
              y="-1"
              width="1200"
              height="602"
            >
              <rect x="10" y="-0.84668" width="1200" height="601.693" fill="url(#paint0_linear_hero)" />
            </mask>
            <g mask="url(#mask0_hero)">
              {/* Grid Rectangles */}
              {[...Array(35)].map((_, i) => (
                <React.Fragment key={`row1-${i}`}>
                  {[...Array(17)].map((_, j) => (
                    <rect
                      key={`grid-${i}-${j}`}
                      x={-20.0891 + i * 36}
                      y={9.2 + j * 36}
                      width="35.6"
                      height="35.6"
                      stroke="hsl(var(--foreground))"
                      strokeOpacity="0.11"
                      strokeWidth="0.4"
                      strokeDasharray="2 2"
                    />
                  ))}
                </React.Fragment>
              ))}
              {/* Subtle highlight rectangles */}
              <rect x="699.711" y="81" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.05" />
              <rect x="195.711" y="153" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.05" />
              <rect x="1023.71" y="153" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.05" />
              <rect x="123.711" y="225" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.05" />
              <rect x="951.711" y="297" width="36" height="36" fill="hsl(var(--foreground))" fillOpacity="0.05" />
            </g>

            <g filter="url(#filter_glow)" opacity="0.5">
              <ellipse cx="610" cy="500" rx="400" ry="250" fill="url(#paint_glow)" />
            </g>
            <g filter="url(#filter_glow2)" opacity="0.3">
              <ellipse cx="300" cy="400" rx="200" ry="150" fill="url(#paint_glow2)" />
            </g>
          </g>

          <rect
            x="0.5"
            y="0.5"
            width="1219"
            height="599"
            rx="15.5"
            stroke="hsl(var(--foreground))"
            strokeOpacity="0.06"
          />

          <defs>
            <filter
              id="filter_glow"
              x="100"
              y="150"
              width="1020"
              height="700"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="100" result="blur" />
            </filter>
            <filter
              id="filter_glow2"
              x="0"
              y="150"
              width="600"
              height="500"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="80" result="blur" />
            </filter>
            <linearGradient id="paint0_linear_hero" x1="35" y1="24" x2="900" y2="630" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--foreground))" stopOpacity="0" />
              <stop offset="1" stopColor="hsl(var(--muted-foreground))" />
            </linearGradient>
            <linearGradient id="paint_glow" x1="610" y1="250" x2="610" y2="750" gradientUnits="userSpaceOnUse">
              <stop stopColor="hsl(var(--primary))" />
              <stop offset="1" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint_glow2" x1="300" y1="250" x2="300" y2="550" gradientUnits="userSpaceOnUse">
              <stop stopColor="#14F195" />
              <stop offset="1" stopColor="#14F195" stopOpacity="0" />
            </linearGradient>
            <clipPath id="clip0_hero">
              <rect width="1220" height="600" rx="16" fill="hsl(var(--foreground))" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* Header positioned at top of hero container */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>

      <div className="relative z-30 flex flex-col items-center justify-center flex-1 mt-20 md:mt-24 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3">
          <span className="text-muted-foreground text-xs">From the team at</span>
          <svg className="h-3 text-foreground" viewBox="0 0 76 65" fill="currentColor">
            <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
          </svg>
          <span className="text-foreground text-xs font-medium">Vercel</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#14F195]/30 bg-[#14F195]/10 mb-6">
          <div className="w-2 h-2 rounded-full bg-[#14F195] animate-pulse" />
          <span className="text-[#14F195] text-sm font-medium">$FORGE Fair Launch on Pump.fun</span>
        </div>

        <div className="mb-6">
          <ForgeLogo className="w-20 h-20 md:w-24 md:h-24 text-primary" />
        </div>

        <div className="space-y-4 md:space-y-5 mb-8 max-w-md md:max-w-[550px] lg:max-w-[650px]">
          <h1 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
            Unleash the Power of AI Agents
          </h1>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-lg mx-auto text-pretty">
            Be among the first to experience intelligent AI agents that write, review, and optimize your code.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <WaitlistModal>
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-white/10">
              Join Waitlist
            </Button>
          </WaitlistModal>
          <Link href="#token-section">
            <Button
              variant="outline"
              className="px-8 py-3 rounded-full font-medium text-base border-[#14F195]/30 text-[#14F195] hover:bg-[#14F195]/10 bg-transparent"
            >
              View $FORGE Token
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
