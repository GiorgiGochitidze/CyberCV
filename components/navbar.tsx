"use client"

import { useState, useEffect } from "react"

const navLinks = [
  { label: "about", href: "#about" },
  { label: "skills", href: "#skills" },
  { label: "ctf", href: "#ctf" },
  { label: "writeups", href: "#writeups" },
  { label: "contact", href: "#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = navLinks.map((link) => link.href.replace("#", ""))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(sections[i])
            return
          }
        }
      }
      setActiveSection("")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
        <a href="#" className="text-primary glow-text text-sm font-bold tracking-wider">
          {"~/giorgi"}
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-widest transition-colors duration-200 ${
                activeSection === link.href.replace("#", "")
                  ? "text-primary glow-text"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <span className="text-primary/50">{">"}</span> {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden text-muted-foreground hover:text-primary transition-colors"
          aria-label="Toggle navigation"
        >
          <span className="text-sm">{isMobileOpen ? "[x]" : "[=]"}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="block py-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-primary/50">{"$"}</span> cd {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
