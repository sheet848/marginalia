import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BookCard } from "../components/BookCard";
import { books, genres } from "../data/books";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop · Marginalia" },
      { name: "description", content: "Browse curated second-hand, rare, and out-of-print books across literary fiction, poetry, philosophy, mystery and more." },
      { property: "og:title", content: "Shop · Marginalia" },
      { property: "og:description", content: "Curated second-hand, rare, and out-of-print books." },
    ],
  }),
  component: Shop,
});

type Sort = "featured" | "price-asc" | "price-desc" | "newest";

function Shop() {
  const [genre, setGenre] = useState<string>("All");
  const [sort, setSort] = useState<Sort>("featured");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    let list = books.slice();
    if (genre !== "All") list = list.filter((b) => b.genre === genre);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.author.toLowerCase().includes(q),
      );
    }
    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list.sort((a, b) => b.year - a.year);
        break;
      default:
        list.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    }
    return list;
  }, [genre, sort, query]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="border-b border-border/60 bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            The Shop
          </div>
          <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">
            Every shelf, every story.
          </h1>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "title" : "titles"} available right now.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-12 lg:grid-cols-[220px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-8">
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Search
            </div>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Title or author…"
              className="w-full border-0 border-b border-border bg-transparent py-2 text-sm placeholder:italic placeholder:text-muted-foreground/70 focus:border-burgundy focus:outline-none"
            />
          </div>
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Genre
            </div>
            <ul className="space-y-1.5">
              {genres.map((g) => (
                <li key={g}>
                  <button
                    onClick={() => setGenre(g)}
                    className={`text-left text-sm transition-colors ${
                      genre === g
                        ? "text-burgundy italic"
                        : "text-foreground/80 hover:text-burgundy"
                    }`}
                  >
                    {g}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-3 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Sort
            </div>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="w-full border-b border-border bg-transparent py-2 text-sm focus:border-burgundy focus:outline-none"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
            </select>
          </div>
        </aside>

        {/* Grid */}
        <div>
          {filtered.length === 0 ? (
            <div className="rounded-sm border border-dashed border-border p-16 text-center">
              <p className="font-serif text-xl italic text-muted-foreground">
                Nothing on this shelf — yet.
              </p>
              <button
                onClick={() => {
                  setGenre("All");
                  setQuery("");
                }}
                className="mt-4 text-sm text-burgundy underline-offset-4 hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((b) => (
                <BookCard key={b.id} book={b} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}