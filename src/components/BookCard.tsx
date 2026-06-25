import { Link } from "@tanstack/react-router";
import type { Book } from "../data/books";
import { BookCover } from "./BookCover";

export function BookCard({ book }: { book: Book }) {
  return (
    <Link
      to="/books/$bookId"
      params={{ bookId: book.id }}
      className="group block"
    >
      <div className="overflow-hidden">
        <div className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-0.5deg]">
          <BookCover
            title={book.title}
            author={book.author}
            color={book.coverColor}
            accent={book.coverAccent}
          />
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          {book.genre} · {book.condition}
        </div>
        <h3 className="font-serif text-lg leading-tight text-ink">{book.title}</h3>
        <div className="text-sm text-muted-foreground italic">{book.author}</div>
        <div className="pt-1 font-serif text-base text-burgundy">${book.price}</div>
      </div>
    </Link>
  );
}