"use client"

import { Mail, MapPin, Linkedin, Github } from "lucide-react"
import { SectionHeader } from "./about-section"

const contacts = [
  {
    icon: <Mail className="w-4 h-4" />,
    label: "Email",
    value: "giorgigochitidze555@gmail.com",
    href: "mailto:giorgigochitidze555@gmail.com",
  },
  {
    icon: <Github className="w-4 h-4" />,
    label: "Github",
    value: "Giorgi Gochitidze",
    href: "https://github.com/GiorgiGochitidze",
  },
  {
    icon: <MapPin className="w-4 h-4" />,
    label: "Location",
    value: "Batumi, Georgia",
    href: null,
  },
  {
    icon: <Linkedin className="w-4 h-4" />,
    label: "LinkedIn",
    value: "Giorgi Gochitidze",
    href: "https://linkedin.com/in/giorgi-gochitidze",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="contact" command="cat ./contact.txt" />

        <div className="mt-10 border border-border rounded-lg overflow-hidden glow-border">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffaa00]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
            <span className="ml-2 text-xs text-muted-foreground">
              contact.sh
            </span>
          </div>
          <div className="p-6 bg-card/30">
            <div className="text-xs text-muted-foreground mb-6">
              <span className="text-primary">{"$"}</span> ./contact.sh --list
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contacts.map((contact) => {
                const content = (
                  <div className="flex items-start gap-3 p-4 rounded-lg border border-border bg-secondary/20 hover:border-primary/30 transition-all duration-200 group">
                    <div className="text-primary mt-0.5">{contact.icon}</div>
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        {contact.label}
                      </div>
                      <div className="text-sm text-foreground group-hover:text-primary transition-colors mt-0.5 break-all">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                )

                if (contact.href) {
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        contact.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {content}
                    </a>
                  )
                }

                return <div key={contact.label}>{content}</div>
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-border text-xs text-muted-foreground">
              <span className="text-primary">{"$"}</span> echo{" "}
              <span className="text-foreground">
                {'"'}Open to collaborations, CTF teams, and security projects.{'"'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
