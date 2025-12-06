"use client"

import { useEffect, useRef } from "react"
import { useLanguage } from "@/lib/language-context"
import { Building2, Utensils, ContrastIcon as DentistIcon, Car } from "lucide-react"

export function IndustriesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { t, isRTL } = useLanguage()
  const [isVisible, setIsVisible] = useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".industry-card")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 100)
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

  const industries = [
    {
      icon: DentistIcon,
      name: "Dental Practices",
      description: "Appointment booking, treatment inquiries, insurance questions",
      results: "65% more booked appointments",
    },
    {
      icon: Utensils,
      name: "Restaurants",
      description: "Reservation management, menu information, delivery details",
      results: "40% increase in bookings",
    },
    {
      icon: Building2,
      name: "Real Estate",
      description: "Property inquiries, viewing scheduling, financing questions",
      results: "3x more qualified leads",
    },
    {
      icon: Car,
      name: "Car Dealerships",
      description: "Vehicle information, test drive booking, financing",
      results: "50% more test drive bookings",
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
            Industries
            <div className="w-8 h-px bg-white/30"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 text-balance">
            Works across <span className="font-medium">every industry</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            From healthcare to hospitality, Cliste's AI adapts to your business needs
          </p>
        </div>

        {/* Industries Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 ${isRTL ? "text-right" : ""}`}>
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div
                key={index}
                className="industry-card opacity-0 translate-y-8 transition-all duration-1000 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-all ${isRTL ? "ml-auto" : ""}`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{industry.description}</p>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-sm font-semibold text-green-400">{industry.results}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
