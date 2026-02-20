/**
 * Wishlist page. Requires auth; shows AuthGate if not logged in.
 * Renders wishlist items with Add to cart and Remove actions.
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useWishlistStore } from "../../store/wishlistStore";
import useUser from "../../hooks/useUser";
import { formatPrice } from "../../utils/formatPrice";
import { showMovedToCartToast, showWishlistRemovedToast } from "../../common/NavBar/alerts";
import AuthGate from "../../components/auth/AuthGate";
import ListRowSkeleton from "../../components/card/ListRowSkeleton";
import { delay } from "../../utils/delay";

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import InfoStripSection from "../../components/ui/InfoStripSection";

import { INFO_STRIP_ITEMS } from "../../data/infoStripData";

const API_DELAY_MS = 2500;
const SKELETON_COUNT = 3;

/**
 * Single wishlist row: image, title, price, Add to cart, Remove.
 */
function WishlistItem({ item }) {
  const removeItem = useWishlistStore((s) => s.removeItem);
  const moveToCart = useWishlistStore((s) => s.moveToCart);

  const handleMoveToCart = () => {
    moveToCart(item.id);
    showMovedToCartToast();
  };

  const handleRemove = () => {
    removeItem(item.id);
    showWishlistRemovedToast();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-200 last:border-0">
      <div className="w-full sm:w-28 h-28 rounded-lg overflow-hidden bg-gray-100 shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-(--secondary-color) line-clamp-2">
          {item.title}
        </h3>
        <p className="text-(--gray-color) text-sm mt-1">{item.category}</p>
        <p className="mt-2 font-semibold text-(--main-color)">
          {formatPrice(item.price)}
        </p>
      </div>
      <div className="flex items-center gap-3 sm:ml-auto">
        <button
          type="button"
          disabled={item.stock < 1}
          onClick={handleMoveToCart}
          className="inline-flex items-center gap-2 rounded-md border-2 border-(--main-color) px-4 py-2 text-sm font-semibold text-(--main-color) hover:bg-(--main-color) hover:text-(--white-color) transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <FaShoppingCart className="w-4 h-4" />
          Add to cart
        </button>
        <button
          type="button"
          aria-label="Remove from wishlist"
          onClick={handleRemove}
          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          <FaTrashCan className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function Wishlist() {
  const user = useUser();
  const items = useWishlistStore((s) => s.items);
  const [loading, setLoading] = useState(true);

  // Simulate wishlist load delay when user is logged in
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
        <h1 className="text-4xl font-bold text-(--secondary-color) mb-8 flex items-center gap-4">
          <FaHeart className="text-(--main-color)" />
          Wishlist
        </h1>

        {!user ? (
          <AuthGate message="Please log in or create an account to view and manage your wishlist." />
        ) : loading ? (
          <div className="bg-(--white-color) rounded-xl border border-gray-200 p-4 sm:p-6">
            {Array.from({ length: SKELETON_COUNT }, (_, i) => (
              <ListRowSkeleton key={i} />
            ))}
          </div>
        ) : items.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-(--gray-color) text-lg mb-6">
              Your wishlist is empty.
            </p>
            <Link
              to="/shop"
              className="inline-block rounded-md bg-(--main-color) px-6 py-3 text-sm font-semibold text-(--white-color) hover:bg-(--secondary-color) transition"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <div className="bg-(--white-color) rounded-xl border border-gray-200 p-4 sm:p-6 card-grid-fade-in">
            {items.map((item) => (
              <WishlistItem key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>

      <InfoStripSection items={INFO_STRIP_ITEMS} containerClassName="" />
    </section>
  );
}
