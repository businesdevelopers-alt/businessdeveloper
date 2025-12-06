"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { MessageSquare, Zap, CheckCircle, TrendingUp } from "lucide-react"

export function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t, isRTL } = useLanguage()

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".step-card")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 150)
            })
          }
        })
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      icon: MessageSquare,
      number: "1",
      title: "Connect Your Channels",
      description: "Integrate your website, WhatsApp, email, phone, and social media in minutes",
    },
    {
      icon: Zap,
      number: "2",
      title: "AI Gets to Work",
      description: "Your AI agent starts handling inquiries instantly, 24/7 with human-like responses",
    },
    {
      icon: CheckCircle,
      number: "3",
      title: "Leads Get Qualified",
      description: "The AI asks smart questions, captures details, and identifies hot prospects",
    },
    {
      icon: TrendingUp,
      number: "4",
      title: "Your Team Closes Deals",
      description: "Sales team gets qualified leads with full context already in your CRM",
    },
  ]

  return (
    <section ref={sectionRef} className={`py-20 md:py-28 px-4 relative z-10 ${isRTL ? "text-right" : ""}`}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center gap-2 text-white/60 text-sm font-medium tracking-wider uppercase mb-6 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <div className="w-8 h-px bg-white/30"></div>
            Process
            <div className="w-8 h-px bg-white/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 text-balance">
            How it <span className="font-medium">works</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Get started in 4 simple steps and transform your customer engagement instantly
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="step-card opacity-0 translate-y-8 transition-all duration-1000">
                <div
                  className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 ${isRTL ? "text-right" : ""}`}
                >
                  {/* Number Badge */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {step.number}
                  </div>

                  <div
                    className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all ${isRTL ? "ml-auto" : ""}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{step.description}</p>
                </div>

                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 w-12 h-px bg-gradient-to-r from-white/20 to-transparent"></div>
                )}
              </div>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-20 pt-12 border-t border-white/10">
          <div className={`text-center ${isRTL ? "text-right" : ""}`}>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">5 mins</div>
            <p className="text-white/70">Setup time</p>
          </div>
          <div className={`text-center ${isRTL ? "text-right" : ""}`}>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <p className="text-white/70">Managed for you</p>
          </div>
          <div className={`text-center ${isRTL ? "text-right" : ""}`}>
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24/7</div>
            <p className="text-white/70">Always working</p>
          </div>
        </div>
      </div>
    </section>
  )
}
