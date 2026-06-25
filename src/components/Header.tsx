import { Link } from "@tanstack/react-router";
import { useAppSelector } from "../store";
import { ShoppingBag, Search } from "lucide-react";

export function Header() {
  const count = useAppSelector((s) =>
    s.cart.items.reduce((acc, i) => acc + i.quantity, 0),
  );
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl tracking-tight text-ink">
            Marginalia
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            est. 2014
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm md:flex">
          <Link
            to="/shop"
            className="text-foreground/80 transition-colors hover:text-burgundy"
            activeProps={{ className: "text-burgundy" }}
          >
            Shop
          </Link>
          <a href="/shop" className="text-foreground/80 transition-colors hover:text-burgundy">
            Rare & Signed
          </a>
          <a href="/#journal" className="text-foreground/80 transition-colors hover:text-burgundy">
            Journal
          </a>
          <a href="/#about" className="text-foreground/80 transition-colors hover:text-burgundy">
            About
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="rounded-full p-2 text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Search className="h-4 w-4" />
          </button>
          <Link
            to="/cart"
            aria-label="Cart"
            className="relative rounded-full p-2 text-foreground/70 transition-colors hover:bg-secondary hover:text-foreground"
          >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-burgundy px-1 text-[10px] font-medium text-primary-foreground">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}