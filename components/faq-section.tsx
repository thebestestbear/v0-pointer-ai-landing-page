"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "Who is behind Forge AI?",
    answer:
      "Forge AI is developed by a team of systems engineers at Vercel, the company behind Next.js and the leading platform for frontend development. This is Vercel's first venture into the Web3 ecosystem, combining our expertise in developer tooling with blockchain technology.",
  },
  {
    question: "What is Forge AI?",
    answer:
      "Forge AI is an upcoming AI-powered development platform that uses intelligent agents to write, review, and optimize code. It's designed for developers, teams, and organizations who want to 10x their coding productivity.",
  },
  {
    question: "What is the $FORGE token and why do I need it?",
    answer:
      "$FORGE is the native utility token powering the Forge AI ecosystem on Monad. Token holders gain access to premium AI features, participate in governance decisions, receive exclusive airdrops, and get priority access to new features. It's the key to unlocking the full potential of Forge AI.",
  },
  {
    question: "When is the token launch?",
    answer:
      "The $FORGE token launch is coming very soon via Nad.fun fair launch. Join our waitlist and follow us on Twitter to be the first to know when the contract address is live. Early supporters will receive priority access and potential airdrop rewards.",
  },
  {
    question: "How can I buy $FORGE tokens?",
    answer:
      "$FORGE will launch exclusively on Nad.fun as a fair launch—no presale, no private allocation. Simply connect your Monad wallet (Phantom, Solflare, etc.), ensure you have SOL, and swap directly on Nad.fun. Contract address will be announced on our official Twitter.",
  },
  {
    question: "Why Nad.fun instead of traditional DEX launches?",
    answer:
      "Nad.fun ensures a truly fair launch where everyone has equal opportunity from block one. No presale dumps, no insider allocations, no hidden wallets. This aligns with our commitment to building a community-first project where early believers are rewarded fairly.",
  },
  {
    question: "What makes Forge AI different from other AI tools?",
    answer:
      "Forge AI features parallel coding agents that work simultaneously on different tasks, real-time code previews, one-click integrations, and is backed by Vercel's infrastructure. The $FORGE token creates a sustainable ecosystem where users directly benefit from the platform's growth.",
  },
  {
    question: "Is my investment safe?",
    answer:
      "We're building for the long term with a transparent tokenomics model: 95% community fair launch, 2.5% dev allocation (locked and vested), and 2.5% ecosystem. The dev team is doxxed as Vercel employees. Always DYOR and only invest what you can afford. This is not financial advice.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about $FORGE and Forge AI
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
