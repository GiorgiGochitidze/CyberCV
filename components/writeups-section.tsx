"use client"

import { ExternalLink, FileText, Terminal } from "lucide-react"
import { SectionHeader } from "./about-section"

const writeups = [
  {
    title: "CTF Writeups",
    description:
      "Detailed walkthroughs of TryHackMe machines and CTF challenges, including reconnaissance, exploitation, and privilege escalation steps.",
    tags: ["TryHackMe", "CTF", "Pentesting"],
  },
  {
    title: "Web Security Labs",
    description:
      "Notes and solutions from PortSwigger Web Security Academy labs covering SQL injection, XSS, CSRF, and more.",
    tags: ["PortSwigger", "Web Security", "OWASP"],
  },
  {
    title: "Tool Guides & Notes",
    description:
      "Quick reference guides for offensive security tools like Nmap, Burp Suite, Metasploit, and custom scripts.",
    tags: ["Tools", "Cheatsheets", "Reference"],
  },
]

export function WriteupsSection() {
  return (
    <section id="writeups" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="writeups" command="ls ./writeups/" />

        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {writeups.map((writeup) => (
            <div
              key={writeup.title}
              className="group border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300 hover:glow-border"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
                <Terminal className="w-3 h-3 text-primary/50" />
                <span className="text-[10px] text-muted-foreground truncate">
                  {writeup.title.toLowerCase().replace(/\s+/g, "-")}.md
                </span>
              </div>
              <div className="p-4 bg-card/20">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-3.5 h-3.5 text-primary" />
                  <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                    {writeup.title}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {writeup.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {writeup.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-secondary text-muted-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 flex justify-center">
          <a
            href="https://medium.com/@giorgigochitidze555"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs bg-primary/10 text-primary border border-primary/30 px-5 py-2.5 rounded-md hover:bg-primary/20 transition-colors glow-border"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Read Writeups on Medium</span>
          </a>
        </div>
      </div>
    </section>
  )
}
