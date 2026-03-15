"use client";

import { useEffect, useState, useRef } from "react";
import { SectionHeader } from "./about-section";

function AnimatedCounter({ target, label }: { target: number; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const increment = Math.max(1, Math.floor(target / 30));
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 50);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-primary glow-text">
        {count}
      </div>
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
}

export function CtfSection() {
  const easyMachines = 26;
  const mediumMachines = 4;
  const sumMachines = easyMachines + mediumMachines;
  return (
    <section id="ctf" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader title="ctf & labs" command="cat ./progress.log" />

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {/* TryHackMe */}
          <div className="border border-primary/20 rounded-lg overflow-hidden glow-border">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              <span className="text-xs text-muted-foreground">
                tryhackme_stats.sh
              </span>
            </div>
            <div className="p-6 bg-card/30">
              <div className="text-xs text-muted-foreground mb-4">
                <span className="text-primary">{"$"}</span> ./tryhackme_stats.sh
              </div>
              <h3 className="text-sm font-bold text-primary glow-text mb-6">
                TryHackMe
              </h3>

              <div className="grid grid-cols-2 gap-6">
                <AnimatedCounter target={easyMachines} label="Easy Machines" />
                <AnimatedCounter
                  target={mediumMachines}
                  label="Medium Machines"
                />
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary">{">"}</span> Notable:{" "}
                  <span className="text-foreground font-semibold">
                    Mr Robot
                  </span>{" "}
                  CTF completed
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex justify-between text-[10px] text-muted-foreground mb-1">
                  <span>Progress</span>
                  <span className="text-primary">{sumMachines} machines</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PortSwigger */}
          <div className="border border-accent/20 rounded-lg overflow-hidden glow-border-cyan">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-accent/70" />
              <span className="text-xs text-muted-foreground">
                portswigger_labs.sh
              </span>
            </div>
            <div className="p-6 bg-card/30">
              <div className="text-xs text-muted-foreground mb-4">
                <span className="text-accent">{"$"}</span> ./portswigger_labs.sh
              </div>
              <h3 className="text-sm font-bold text-accent glow-text-cyan mb-6">
                PortSwigger Academy
              </h3>

              <div className="flex items-center justify-center py-4">
                <div className="text-center">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Status
                  </div>
                  <div className="text-accent glow-text-cyan text-sm font-bold animate-pulse-glow">
                    IN PROGRESS
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="text-xs text-muted-foreground">
                  <span className="text-accent">{">"}</span> Focus:{" "}
                  <span className="text-foreground font-semibold">
                    Web Security Labs
                  </span>
                </div>
              </div>

              {/* Animated dots */}
              <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
                <span className="text-accent">{"$"}</span>
                <span>completing labs</span>
                <span className="animate-pulse-glow text-accent">...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
