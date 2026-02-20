/**
 * Shopping cart page. Requires auth; shows AuthGate if not logged in.
 * Renders cart items with quantity controls and subtotal.
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  useCartStore,
  selectCartCount,
  selectCartSubtotal,
} from "../../store/cartStore";
import useUser from "../../hooks/useUser";
import { QuantityControl } from "../../components/ui/QuantityControl";
import { formatPrice } from "../../utils/formatPrice";
import { showCartRemovedToast } from "../../common/NavBar/alerts";
import AuthGate from "../../components/auth/AuthGate";
import ListRowSkeleton from "../../components/card/ListRowSkeleton";
import { delay } from "../../utils/delay";

import { FaTrashCan } from "react-icons/fa6";

import { INFO_STRIP_ITEMS } from "../../data/infoStripData";
import InfoStripSection from "../../components/ui/InfoStripSection";

const API_DELAY_MS = 2500;
const SKELETON_COUNT = 3;

/**
 * Single cart row: image, title, price, quantity control, remove.
 */
function CartItem({ item }) {
  const removeItem = useCartStore((s) => s.removeItem);
  const incrementQuantity = useCartStore((s) => s.incrementQuantity);
  const decrementQuantity = useCartStore((s) => s.decrementQuantity);

  const lineTotal = item.price * item.qty;

  const handleRemove = () => {
    removeItem(item.id);
    showCartRemovedToast();
  };

  return (
    <div className="flex flex-col items-center sm:flex-row gap-4 py-6 border-b border-gray-200 last:border-0">
      <div className="w-full sm:w-28 h-28 rounded-lg overflow-hidden bg-gray-100 shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col gap-1.5 min-w-0">
        <h3 className="font-semibold text-(--secondary-color) line-clamp-2 text-lg">
          {item.title}
        </h3>
        <p className="text-(--gray-color) text-sm mt-1">{item.category}</p>
        <p className="mt-2 font-semibold text-(--main-color)">
          {formatPrice(item.price)} each
        </p>
      </div>
      <div className="flex items-center gap-4 sm:ml-auto">
        <QuantityControl
          value={item.qty}
          min={1}
          max={item.stock}
          onIncrease={() => incrementQuantity(item.id)}
          onDecrease={() => decrementQuantity(item.id)}
        />
        <p className="min-w-20 text-right font-semibold text-(--secondary-color)">
          {formatPrice(lineTotal)}
        </p>
        <button
          type="button"
          aria-label="Remove from cart"
          onClick={handleRemove}
          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          <FaTrashCan className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function Cart() {
  const user = useUser();
  const items = useCartStore((s) => s.items);
  const count = useCartStore(selectCartCount);
  const subtotal = useCartStore(selectCartSubtotal);
  const [loading, setLoading] = useState(true);

  // Simulate cart load delay when user is logged in
  useEffect(() => {
    if (!user) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLoading(false);
      return;
    }
    let cancelled = false;
    setLoading(true);
    delay(API_DELAY_MS).finally(() => {
      if (!cancelled) setLoading(false);
    });
    return () => { cancelled = true; };
  }, [user]);

  return (
    <section className="my-16 gap-12 pt-20 flex flex-col justify-between items-center min-h-max">
      <div className="w-full max-w-330 mx-auto flex flex-col gap-12 px-3 xl:px-24">
        <h1 className="text-4xl font-bold text-(--secondary-color) mb-8">
          Shopping Cart
        </h1>

        {!user ? (
          <AuthGate message="Please log in or create an account to view and manage your cart." />
        ) : loading ? (
          <div className="bg-(--white-color) rounded-xl border border-gray-200 p-4 sm:p-6">
            {Array.from({ length: SKELETON_COUNT }, (_, i) => (
              <ListRowSkeleton key={i} />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-(--gray-color) text-lg mb-6">
              Your cart is empty.
            </p>
            <Link
              to="/shop"
              className="inline-block rounded-md bg-(--main-color) px-6 py-3 text-sm font-semibold text-(--white-color) hover:bg-(--secondary-color) transition"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-(--white-color) rounded-xl border border-gray-200 p-4 sm:p-6 card-grid-fade-in">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <Link
                to="/shop"
                className="inline-block rounded-md border-2 border-(--main-color) px-6 py-3 text-sm font-semibold text-(--main-color) hover:bg-(--main-color) hover:text-(--white-color) transition text-center"
              >
                Continue shopping
              </Link>
              <div className="flex flex-col sm:items-end gap-2">
                <p className="text-(--gray-color)">
                  <span className="font-semibold text-(--secondary-color)">
                    {count}
                  </span>{" "}
                  item{count !== 1 ? "s" : ""}
                </p>
                <p className="text-xl font-bold text-(--main-color)">
                  Subtotal : {formatPrice(subtotal)}
                </p>
                <Link
                  to="/cart"
                  className="inline-block rounded-md bg-(--main-color) px-6 py-3 text-lg font-semibold text-(--white-color) hover:bg-(--secondary-color) transition text-center"
                >
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>

      <InfoStripSection items={INFO_STRIP_ITEMS} containerClassName="mt-16" />
    </section>
  );
}
