"use client"

import { SectionHeader } from "./about-section"

const cyberSkills = [
  "Nmap",
  "Metasploit",
  "Burp Suite",
  "Hydra",
  "Netcat",
  "Feroxbuster",
  "WPScan",
  "Hashcat",
  "John the Ripper",
  "Linux Priv Esc",
  "Web App Pentesting",
  "Reverse Shells",
  "OSINT",
]

const devSkills = ["React", "TypeScript", "NodeJS", "Python"]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="skills" command="ls -la ./arsenal/" />

        {/* Cybersecurity Skills */}
        <div className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary text-xs">{">"}</span>
            <span className="text-xs text-primary uppercase tracking-widest font-semibold">
              Offensive Security
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {cyberSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center text-xs px-3 py-1.5 rounded border border-primary/30 bg-primary/5 text-primary glow-border transition-all duration-200 hover:bg-primary/10 hover:border-primary/50"
              >
                <span className="text-primary/50 mr-1.5">{"#"}</span>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Dev Skills */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-accent text-xs">{">"}</span>
            <span className="text-xs text-accent uppercase tracking-widest font-semibold">
              Development (Supporting)
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {devSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center text-xs px-3 py-1.5 rounded border border-border bg-secondary/50 text-muted-foreground transition-all duration-200 hover:border-accent/30 hover:text-accent"
              >
                <span className="text-accent/40 mr-1.5">{"$"}</span>
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Terminal visualization */}
        <div className="mt-10 border border-border rounded-lg overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
            <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffaa00]/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
            <span className="ml-2 text-xs text-muted-foreground">
              skills.log
            </span>
          </div>
          <div className="p-5 bg-card/30 text-xs leading-loose">
            <div className="text-muted-foreground">
              <span className="text-primary">giorgi@kali</span>
              <span className="text-foreground/70">:</span>
              <span className="text-accent">~/arsenal</span>
              <span className="text-foreground/70">{"$"}</span>{" "}
              <span className="text-foreground">tree --dirsfirst</span>
            </div>
            <div className="text-muted-foreground mt-2 pl-2">
              <div>
                <span className="text-primary">{"."}</span>
              </div>
              <div>
                {"├── "}<span className="text-primary">recon/</span>
                {"       ── nmap, feroxbuster, OSINT"}
              </div>
              <div>
                {"├── "}<span className="text-primary">exploitation/</span>
                {" ── metasploit, burp suite, hydra"}
              </div>
              <div>
                {"├── "}<span className="text-primary">post-exploit/</span>
                {" ── priv esc, reverse shells, netcat"}
              </div>
              <div>
                {"├── "}<span className="text-primary">cracking/</span>
                {"     ── hashcat, john the ripper"}
              </div>
              <div>
                {"└── "}<span className="text-accent">webdev/</span>
                {"       ── react, typescript, nodejs"}
              </div>
              <div className="mt-2 text-muted-foreground">
                5 directories, 13 tools loaded
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
