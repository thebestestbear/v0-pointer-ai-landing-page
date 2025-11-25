"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { CheckCircle2 } from "lucide-react"

interface WaitlistModalProps {
  children: React.ReactNode
}

export function WaitlistModal({ children }: WaitlistModalProps) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      // Email doesn't need to go anywhere for now
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) {
      // Reset state when modal closes
      setTimeout(() => {
        setSubmitted(false)
        setEmail("")
      }, 200)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md bg-background border border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground text-xl">
            {submitted ? "You're on the list!" : "Join the Waitlist"}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {submitted
              ? "We'll notify you when Forge AI launches. Early supporters get priority access and $FORGE token benefits."
              : "Be the first to know when Forge AI launches. Get early access and exclusive $FORGE token benefits."}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="flex flex-col items-center py-6 gap-4">
            <div className="w-16 h-16 rounded-full bg-[#14F195]/20 flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#14F195]" />
            </div>
            <p className="text-muted-foreground text-sm text-center">Follow us on Twitter for the latest updates</p>
            <a
              href="https://twitter.com/raunofreiberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm font-medium"
            >
              @raunofreiberg
            </a>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-background border-border text-foreground placeholder:text-muted-foreground"
            />
            <Button
              type="submit"
              className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full font-medium"
            >
              Get Early Access
            </Button>
            <p className="text-xs text-muted-foreground text-center">No spam. Unsubscribe anytime.</p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  )
}
