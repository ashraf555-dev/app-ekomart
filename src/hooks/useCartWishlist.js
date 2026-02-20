/**
 * LEGACY: useCart/useWishlist hooks. Replaced by Zustand stores (cartStore, wishlistStore).
 * Not imported anywhere. Safe to remove if not needed.
 */
import { useEffect, useState } from "react";

const CART_KEY = "cart";
const WISHLIST_KEY = "wishlist";

export function useCart(user) {
  const [cart, setCart] = useState(() => {
    if (user) {
      const stored = localStorage.getItem(CART_KEY + user);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(CART_KEY + user, JSON.stringify(cart));
    }
  }, [cart, user]);

  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem(CART_KEY + user);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCart(stored ? JSON.parse(stored) : []);
    } else {
      setCart([]);
    }
    // eslint-disable-next-line
  }, [user]);

  const addToCart = (item) => {
    if (!user) return;
    setCart((prev) => {
      const idx = prev.findIndex((i) => i.id === item.id);
      if (idx > -1) {
        const updated = [...prev];
        updated[idx].qty += 1;
        return updated;
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    if (!user) return;
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  const changeQty = (id, delta) => {
    if (!user) return;
    setCart((prev) =>
      prev.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i,
      ),
    );
  };

  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);

  return { cart, addToCart, removeFromCart, changeQty, count, subtotal };
}

export function useWishlist(user) {
  const [wishlist, setWishlist] = useState(() => {
    if (user) {
      const stored = localStorage.getItem(WISHLIST_KEY + user);
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(WISHLIST_KEY + user, JSON.stringify(wishlist));
    }
  }, [wishlist, user]);

  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem(WISHLIST_KEY + user);
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWishlist(stored ? JSON.parse(stored) : []);
    } else {
      setWishlist([]);
    }
    // eslint-disable-next-line
  }, [user]);

  const toggleWishlist = (item) => {
    if (!user) return;
    setWishlist((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) return prev.filter((i) => i.id !== item.id);
      return [...prev, item];
    });
  };

  const isInWishlist = (id) => wishlist.some((i) => i.id === id);

  return { wishlist, toggleWishlist, isInWishlist };
}
