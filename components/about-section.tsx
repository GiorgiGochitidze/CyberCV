"use client"

import { Shield, Code, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="about" command="whoami" />

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          <div className="md:col-span-2 items-stretch">
            <TerminalWindow title="~/about/bio.md">
              <p className="text-sm text-foreground/90 leading-relaxed">
                <span className="text-primary/70">{"## "}</span>
                5 months into cybersecurity, self-taught with a strong web
                development background{" "}
                <span className="text-accent">(3 years full-stack, MERN stack)</span>.
                My dev experience gives me a deep understanding of how web
                applications are built — which directly helps in finding and
                exploiting vulnerabilities.
              </p>
              <p className="text-sm text-foreground/90 leading-relaxed mt-4">
                Currently focused on{" "}
                <span className="text-primary font-semibold">Red Teaming</span>,{" "}
                <span className="text-primary font-semibold">Web Pentesting</span>{" "}
                and{" "}
                <span className="text-primary font-semibold">
                  Ethical Hacking
                </span>
                . Goal is to become a high-level Penetration Tester.
              </p>
            </TerminalWindow>
          </div>

          <div className="flex flex-col gap-4">
            <StatCard
              icon={<Shield className="w-4 h-4" />}
              label="Focus"
              value="Red Team"
              color="primary"
            />
            <StatCard
              icon={<Code className="w-4 h-4" />}
              label="Dev Experience"
              value="3 Years"
              color="accent"
            />
            <StatCard
              icon={<Target className="w-4 h-4" />}
              label="Security"
              value="5 Months"
              color="primary"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ title, command }: { title: string; command: string }) {
  return (
    <div className="flex items-center gap-3 mb-2">
      <span className="text-primary text-xs">{"$"}</span>
      <span className="text-muted-foreground text-xs">{command}</span>
      <div className="flex-1 h-px bg-border" />
      <span className="text-xs text-muted-foreground uppercase tracking-widest">
        [{title}]
      </span>
    </div>
  )
}

function TerminalWindow({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="border border-border rounded-lg overflow-hidden glow-border">
      <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#ffaa00]/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
        <span className="ml-2 text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="p-5 bg-card/50">{children}</div>
    </div>
  )
}

function StatCard({
  icon,
  label,
  value,
  color,
}: {
  icon: React.ReactNode
  label: string
  value: string
  color: "primary" | "accent"
}) {
  const colorClasses =
    color === "primary"
      ? "border-primary/20 text-primary"
      : "border-accent/20 text-accent"

  return (
    <div
      className={`border ${colorClasses} rounded-lg p-4 bg-card/30 flex items-center gap-3`}
    >
      <div className={`${colorClasses}`}>{icon}</div>
      <div>
        <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </div>
        <div className={`text-sm font-bold ${colorClasses}`}>{value}</div>
      </div>
    </div>
  )
}

export { SectionHeader, TerminalWindow }
