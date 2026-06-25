import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { BookCover } from "../components/BookCover";
import { useAppDispatch, useAppSelector } from "../store";
import { removeFromCart, updateQuantity, clearCart } from "../store/cartSlice";
import { Trash2, Minus, Plus } from "lucide-react";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Bag · Marginalia" },
      { name: "description", content: "Review the books in your bag before checking out." },
    ],
  }),
  component: Cart,
});

function Cart() {
  const items = useAppSelector((s) => s.cart.items);
  const dispatch = useAppDispatch();
  const subtotal = items.reduce((acc, i) => acc + i.price * i.quantity, 0);
  const shipping = items.length === 0 ? 0 : subtotal > 60 ? 0 : 6;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          The Counter
        </div>
        <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">Your bag</h1>

        {items.length === 0 ? (
          <div className="mt-16 rounded-sm border border-dashed border-border bg-paper p-16 text-center">
            <p className="font-serif text-2xl italic text-muted-foreground">
              Your bag is empty.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              The good books are this way.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm text-background hover:bg-burgundy"
            >
              Browse the shop
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_360px]">
            <ul className="divide-y divide-border/60">
              {items.map((item) => (
                <li key={item.id} className="flex gap-6 py-6">
                  <Link to="/books/$bookId" params={{ bookId: item.id }}>
                    <BookCover
                      title={item.title}
                      author={item.author}
                      color={item.coverColor}
                      accent={item.coverAccent}
                      size="sm"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <Link
                        to="/books/$bookId"
                        params={{ bookId: item.id }}
                        className="font-serif text-lg text-ink hover:text-burgundy"
                      >
                        {item.title}
                      </Link>
                      <div className="text-sm italic text-muted-foreground">{item.author}</div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center rounded-full border border-border">
                        <button
                          aria-label="Decrease"
                          onClick={() =>
                            dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
                          }
                          className="p-2 hover:text-burgundy"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm">{item.quantity}</span>
                        <button
                          aria-label="Increase"
                          onClick={() =>
                            dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))
                          }
                          className="p-2 hover:text-burgundy"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-burgundy"
                      >
                        <Trash2 className="h-3 w-3" />
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right font-serif text-lg text-ink">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))}
              <li className="flex justify-end pt-4">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="text-xs italic text-muted-foreground hover:text-burgundy"
                >
                  Empty the bag
                </button>
              </li>
            </ul>

            <aside className="h-fit rounded-sm border border-border/60 bg-paper p-6">
              <div className="font-serif text-xl text-ink">Order summary</div>
              <dl className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd>${subtotal.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Shipping</dt>
                  <dd>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</dd>
                </div>
                <div className="border-t border-border/60 pt-3 flex justify-between font-serif text-lg text-ink">
                  <dt>Total</dt>
                  <dd>${total.toFixed(2)}</dd>
                </div>
              </dl>
              <button className="mt-6 w-full rounded-full bg-ink py-3.5 text-sm text-background transition-colors hover:bg-burgundy">
                Proceed to checkout
              </button>
              <p className="mt-4 text-center text-xs italic text-muted-foreground">
                Free shipping on orders over $60.
              </p>
            </aside>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}