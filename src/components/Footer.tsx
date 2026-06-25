import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl text-ink">Marginalia</div>
          <p className="mt-3 max-w-sm text-sm text-muted-foreground leading-relaxed">
            A marketplace for book lovers — curated, second-hand, rare, and out-of-print
            titles from independent sellers and small presses around the world.
          </p>
        </div>
        <div>
          <div className="mb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            Browse
          </div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-burgundy">All Books</Link></li>
            <li><Link to="/shop" className="hover:text-burgundy">New Arrivals</Link></li>
            <li><Link to="/shop" className="hover:text-burgundy">Rare & Signed</Link></li>
            <li><Link to="/shop" className="hover:text-burgundy">Gift Cards</Link></li>
          </ul>
        </div>
        <div>
          <div className="mb-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            The House
          </div>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-burgundy">About</a></li>
            <li><a href="#journal" className="hover:text-burgundy">Journal</a></li>
            <li><a href="#" className="hover:text-burgundy">Sell with us</a></li>
            <li><a href="#" className="hover:text-burgundy">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <div>© {new Date().getFullYear()} Marginalia Books Co.</div>
          <div className="italic">"A room without books is like a body without a soul." — Cicero</div>
        </div>
      </div>
    </footer>
  );
}