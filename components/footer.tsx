export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-muted-foreground">
          <span className="text-primary">{"$"}</span> echo{" "}
          <span className="text-foreground/70">
            {'"'}Giorgi Gochitidze &copy; 2026{'"'}
          </span>
        </div>
        <div className="text-[10px] text-muted-foreground/60 uppercase tracking-widest">
          Built with Next.js &middot; Deployed on Netlify
        </div>
      </div>
    </footer>
  )
}
