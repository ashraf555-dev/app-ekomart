import { create } from "zustand";

const CART_STORAGE_PREFIX = "ekomart_cart_";

function storageKey(uid) {
  return uid ? `${CART_STORAGE_PREFIX}${uid}` : null;
}

function loadCartForUser(uid) {
  const key = storageKey(uid);
  if (!key) return [];
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCartForUser(uid, items) {
  const key = storageKey(uid);
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch {
    // ignore
  }
}

/**
 * Cart item shape: { id, qty, title, price, image, category, stock }
 * Cart is per user; currentUserId is set by auth sync (Layout). When null, items are empty.
 */
export const useCartStore = create((set, get) => ({
  currentUserId: null,
  items: [],

  setCurrentUser: (uid) => {
    const items = loadCartForUser(uid ?? null);
    set({ currentUserId: uid ?? null, items });
  },

  addItem: (product, quantity = 1) => {
    const uid = get().currentUserId;
    if (!uid) return;
    const { id, title, price, image, category, stock } = product;
    const qty = Math.min(Math.max(1, Math.floor(quantity)), Math.max(1, stock));
    set((state) => {
      const existing = state.items.find((i) => i.id === id);
      let next;
      if (existing) {
        next = state.items.map((i) =>
          i.id === id ? { ...i, qty: Math.min(i.qty + qty, i.stock) } : i
        );
      } else {
        next = [
          ...state.items,
          { id, qty, title, price, image, category, stock },
        ];
      }
      saveCartForUser(state.currentUserId, next);
      return { items: next };
    });
  },

  removeItem: (id) => {
    const uid = get().currentUserId;
    if (!uid) return;
    set((state) => {
      const next = state.items.filter((i) => i.id !== id);
      saveCartForUser(state.currentUserId, next);
      return { items: next };
    });
  },

  setQuantity: (id, qty) => {
    const uid = get().currentUserId;
    if (!uid) return;
    const num = Math.floor(Number(qty));
    if (num < 1) {
      get().removeItem(id);
      return;
    }
    set((state) => {
      const next = state.items.map((i) => {
        if (i.id !== id) return i;
        const capped = Math.min(num, i.stock);
        return { ...i, qty: capped };
      });
      saveCartForUser(state.currentUserId, next);
      return { items: next };
    });
  },

  incrementQuantity: (id) => {
    const uid = get().currentUserId;
    if (!uid) return;
    set((state) => {
      const next = state.items.map((i) => {
        if (i.id !== id) return i;
        const qty = Math.min(i.qty + 1, i.stock);
        return { ...i, qty };
      });
      saveCartForUser(state.currentUserId, next);
      return { items: next };
    });
  },

  decrementQuantity: (id) => {
    const uid = get().currentUserId;
    if (!uid) return;
    set((state) => {
      const next = state.items
        .map((i) => {
          if (i.id !== id) return i;
          const qty = i.qty - 1;
          return { ...i, qty };
        })
        .filter((i) => i.qty > 0);
      saveCartForUser(state.currentUserId, next);
      return { items: next };
    });
  },

  clearCart: () => {
    const uid = get().currentUserId;
    set({ items: [] });
    if (uid) saveCartForUser(uid, []);
  },
}));

export const selectCartCount = (state) =>
  state.items.reduce((sum, i) => sum + i.qty, 0);

export const selectCartSubtotal = (state) =>
  state.items.reduce((sum, i) => sum + i.price * i.qty, 0);
