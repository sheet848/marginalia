import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BookCard } from "../components/BookCard";
import { books } from "../data/books";
import heroImg from "../assets/hero-books.jpg";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marginalia — A Marketplace for Book Lovers" },
      {
        name: "description",
        content:
          "Curated second-hand, rare, and out-of-print books from independent sellers and small presses.",
      },
      { property: "og:title", content: "Marginalia — A Marketplace for Book Lovers" },
      {
        property: "og:description",
        content: "Curated second-hand, rare, and out-of-print books from independent sellers.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const featured = books.filter((b) => b.featured);
  const newArrivals = books.slice(3, 9);
  const collections = [
    { name: "Literary Fiction", count: 248, color: "#3b2a4a" },
    { name: "Poetry", count: 94, color: "#1f3a4a" },
    { name: "Philosophy", count: 132, color: "#5a6a7a" },
    { name: "Mystery", count: 187, color: "#2a3b2e" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24 md:gap-16">
          <div className="flex flex-col justify-center">
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              A marketplace for book lovers
            </div>
            <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-balance text-ink md:text-7xl">
              Stories worth <em className="text-burgundy">keeping</em>.
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Curated second-hand, rare, and out-of-print titles from independent
              sellers and small presses. Every book has a previous life — and a next one.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-background transition-colors hover:bg-burgundy"
              >
                Browse the shelves
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#featured"
                className="text-sm italic underline-offset-4 hover:underline"
              >
                or see this week's picks
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 border-t border-border/60 pt-6 text-xs text-muted-foreground">
              <div>
                <div className="font-serif text-xl text-ink">12,400+</div>
                <div className="mt-1 uppercase tracking-[0.2em]">titles</div>
              </div>
              <div>
                <div className="font-serif text-xl text-ink">320</div>
                <div className="mt-1 uppercase tracking-[0.2em]">sellers</div>
              </div>
              <div>
                <div className="font-serif text-xl text-ink">48 hr</div>
                <div className="mt-1 uppercase tracking-[0.2em]">shipping</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="A stack of vintage hardcover books lit by warm lamplight, with one open book in the foreground."
              width={1600}
              height={1024}
              className="book-shadow h-[520px] w-full rounded-sm object-cover"
            />
            <div className="absolute -bottom-6 -left-6 hidden max-w-[240px] rounded-sm bg-background p-5 book-shadow md:block">
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Editor's note
              </div>
              <p className="mt-2 font-serif text-sm italic leading-snug text-ink">
                "We sourced 84 new titles this week, including a signed first edition
                from Vera Ashworth."
              </p>
              <div className="mt-2 text-xs text-muted-foreground">— Iris, head buyer</div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="border-y border-border/60 bg-paper">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="flex items-end justify-between">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">Browse by shelf</h2>
            <Link to="/shop" className="hidden text-sm italic text-burgundy hover:underline md:block">
              See all genres →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((c) => (
              <Link
                key={c.name}
                to="/shop"
                className="group relative flex h-44 flex-col justify-between overflow-hidden rounded-sm p-6 text-background book-shadow"
                style={{ backgroundColor: c.color }}
              >
                <div className="text-[10px] uppercase tracking-[0.25em] opacity-70">
                  Collection
                </div>
                <div>
                  <div className="font-serif text-2xl">{c.name}</div>
                  <div className="mt-1 text-xs opacity-70">{c.count} titles</div>
                </div>
                <ArrowRight className="absolute right-5 top-5 h-4 w-4 opacity-70 transition-transform group-hover:translate-x-1" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section id="featured" className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              This week
            </div>
            <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
              Staff picks
            </h2>
          </div>
          <Link to="/shop" className="hidden text-sm italic text-burgundy hover:underline md:block">
            View all →
          </Link>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </section>

      {/* Quote band */}
      <section className="bg-ink py-20 text-background">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="font-serif text-5xl text-gold">"</div>
          <p className="font-serif text-2xl italic leading-snug md:text-3xl text-balance">
            A second-hand book has a heart that's already been broken in.
            That's what makes it ready to fit yours.
          </p>
          <div className="mt-6 text-xs uppercase tracking-[0.3em] text-background/60">
            from the Marginalia Journal
          </div>
        </div>
      </section>

      {/* New arrivals */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex items-end justify-between">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">
            New arrivals
          </h2>
          <Link to="/shop" className="hidden text-sm italic text-burgundy hover:underline md:block">
            Shop everything →
          </Link>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {newArrivals.map((b) => (
            <BookCard key={b.id} book={b} />
          ))}
        </div>
      </section>

      {/* Journal */}
      <section id="journal" className="border-t border-border/60 bg-paper">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              From the Journal
            </div>
            <h2 className="mt-3 font-serif text-3xl text-ink md:text-4xl">
              Notes from the back room.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Short essays, seller interviews, and reading lists from our editors.
            </p>
          </div>
          <div className="md:col-span-2 grid gap-8 sm:grid-cols-2">
            {[
              {
                tag: "Essay",
                title: "On the smell of a paperback at thirty",
                excerpt: "Why certain editions age into themselves, and others don't.",
              },
              {
                tag: "Interview",
                title: "Adaeze Okafor on inherited libraries",
                excerpt: "The author of House of Borrowed Light on the books her mother left behind.",
              },
            ].map((p) => (
              <article key={p.title} className="group cursor-pointer">
                <div className="aspect-[4/3] w-full rounded-sm bg-ink/90" />
                <div className="mt-4 text-[10px] uppercase tracking-[0.25em] text-burgundy">
                  {p.tag}
                </div>
                <h3 className="mt-2 font-serif text-xl text-ink group-hover:underline underline-offset-4">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-3xl px-6 py-20 text-center">
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          About Marginalia
        </div>
        <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl text-balance">
          We sell books we'd keep ourselves.
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Marginalia began in a one-room shop in Edinburgh in 2014. A decade later we
          work with 320 sellers across Europe and North America — small presses, retired
          librarians, estate keepers, and a few professional cataloguers. Every listing
          is hand-checked. Nothing on the site exists only because an algorithm thought
          it should.
        </p>
      </section>

      <Footer />
    </div>
  );
}
