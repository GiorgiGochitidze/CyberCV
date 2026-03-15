"use client";

import { useState, useEffect } from "react";

const titles = [
  "Aspiring Ethical Hacker",
  "Penetration Tester",
  "Red Teamer",
  "Web App Pentester",
];

export function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullTitle = titles[titleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentTitle(currentFullTitle.slice(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);

          if (charIndex + 1 === currentFullTitle.length) {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          setCurrentTitle(currentFullTitle.slice(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);

          if (charIndex - 1 === 0) {
            setIsDeleting(false);
            setTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-5xl w-full">
        {/* Terminal Window */}
        <div className="border border-border rounded-lg overflow-hidden glow-border">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary/50 border-b border-border">
            <div className="w-3 h-3 rounded-full bg-destructive/70" />
            <div className="w-3 h-3 rounded-full bg-[#ffaa00]/70" />
            <div className="w-3 h-3 rounded-full bg-primary/70" />
            <span className="ml-3 text-xs text-muted-foreground">
              giorgi@kali:~
            </span>
          </div>

          {/* Terminal Body */}
          <div className="p-6 md:p-8 bg-card/50">
            <div className="text-muted-foreground text-xs mb-6">
              <span className="text-primary">{"$"}</span> cat /etc/hacker.conf
            </div>

            <h1 className="text-2xl md:text-4xl font-bold text-foreground mb-3 leading-relaxed">
              Giorgi Gochitidze
            </h1>

            <div className="flex items-center gap-1 mb-6">
              <span className="text-accent glow-text-cyan text-lg md:text-xl font-semibold">
                {currentTitle}
              </span>
              <span className="text-accent animate-blink text-lg md:text-xl font-bold">
                _
              </span>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
              <span className="text-primary/70">{"// "}</span>
              Full-Stack Developer turned Ethical Hacker — breaking things to
              make them safer.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-xs bg-primary/10 text-primary border border-primary/30 px-4 py-2 rounded-md hover:bg-primary/20 transition-colors glow-border"
              >
                <span>{">"}</span> explore
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs bg-secondary text-secondary-foreground border border-border px-4 py-2 rounded-md hover:border-accent/30 hover:text-accent transition-colors"
              >
                <span>{">"}</span> contact
              </a>
              <a
                href="https://tryhackme.com/p/giorgigochitidze555"
                target="_blank"
                className="inline-flex items-center gap-2 text-xs bg-secondary text-secondary-foreground border border-border px-4 py-2 rounded-md hover:border-accent/30 hover:text-accent transition-colors"
              >
                <span>{">"}</span> TryHackMe Profile
              </a>
            </div>

            <div className="mt-8 text-xs text-muted-foreground">
              <span className="text-primary">{"$"}</span>{" "}
              <span className="animate-blink">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
