import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BookCover } from "../components/BookCover";
import { BookCard } from "../components/BookCard";
import { books, getBook } from "../data/books";
import { useAppDispatch } from "../store";
import { addToCart } from "../store/cartSlice";
import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/books/$bookId")({
  loader: ({ params }) => {
    const book = getBook(params.bookId);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => {
    const book = loaderData?.book;
    return {
      meta: book
        ? [
            { title: `${book.title} by ${book.author} · Marginalia` },
            { name: "description", content: book.description },
            { property: "og:title", content: `${book.title} — ${book.author}` },
            { property: "og:description", content: book.description },
          ]
        : [{ title: "Book · Marginalia" }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-serif text-4xl text-ink">This title isn't on our shelves.</h1>
        <p className="mt-4 text-muted-foreground">
          It may have sold, or the link may be misspelled.
        </p>
        <Link to="/shop" className="mt-6 inline-block text-burgundy underline-offset-4 hover:underline">
          Back to the shop →
        </Link>
      </div>
      <Footer />
    </div>
  ),
  errorComponent: ({ reset }) => (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="font-serif text-3xl text-ink">Something went wrong.</h1>
        <button onClick={reset} className="mt-4 text-burgundy hover:underline">Try again</button>
      </div>
    </div>
  ),
  component: BookDetail,
});

function BookDetail() {
  const { book } = Route.useLoaderData();
  const dispatch = useAppDispatch();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    dispatch(addToCart(book));
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const related = books.filter((b) => b.id !== book.id && b.genre === book.genre).slice(0, 4);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl px-6 py-8">
        <nav className="text-xs text-muted-foreground">
          <Link to="/" className="hover:text-burgundy">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-burgundy">Shop</Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{book.title}</span>
        </nav>
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 md:grid-cols-2">
        <div className="flex items-start justify-center bg-paper py-16">
          <div className="w-64 md:w-80">
            <BookCover
              title={book.title}
              author={book.author}
              color={book.coverColor}
              accent={book.coverAccent}
              size="lg"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {book.genre} · {book.year}
          </div>
          <h1 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl text-balance">
            {book.title}
          </h1>
          <div className="mt-3 font-serif text-lg italic text-muted-foreground">
            by {book.author}
          </div>

          <div className="mt-8 flex items-baseline gap-4">
            <div className="font-serif text-3xl text-burgundy">${book.price}</div>
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {book.condition} · ships in 48h
            </div>
          </div>

          <p className="mt-8 text-base leading-relaxed text-foreground/85">
            {book.description}
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-y-3 border-t border-border/60 pt-6 text-sm">
            <dt className="text-muted-foreground">Publisher</dt>
            <dd>{book.publisher}</dd>
            <dt className="text-muted-foreground">Pages</dt>
            <dd>{book.pages}</dd>
            <dt className="text-muted-foreground">First published</dt>
            <dd>{book.year}</dd>
            <dt className="text-muted-foreground">Condition</dt>
            <dd>{book.condition}</dd>
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={handleAdd}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm text-background transition-colors hover:bg-burgundy"
            >
              {added ? <Check className="h-4 w-4" /> : <ShoppingBag className="h-4 w-4" />}
              {added ? "Added to bag" : `Add to bag — $${book.price}`}
            </button>
            <Link
              to="/cart"
              className="text-sm italic text-burgundy underline-offset-4 hover:underline"
            >
              View bag →
            </Link>
          </div>

          <div className="mt-10 rounded-sm border border-border/60 bg-paper p-5 text-sm">
            <div className="font-serif text-base text-ink">A note on this copy</div>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              This copy is in <strong className="text-foreground">{book.condition}</strong> condition.
              Spine and binding inspected. No markings unless noted. Packed in recycled
              kraft and shipped carbon-neutral from our depot in Ghent.
            </p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-border/60 bg-paper">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <h2 className="font-serif text-2xl text-ink md:text-3xl">You might also read</h2>
            <div className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((b) => (
                <BookCard key={b.id} book={b} />
              ))}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}