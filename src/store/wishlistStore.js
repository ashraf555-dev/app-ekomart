import { create } from "zustand";
import { useCartStore } from "./cartStore";

const WISHLIST_STORAGE_PREFIX = "ekomart_wishlist_";

function storageKey(uid) {
  return uid ? `${WISHLIST_STORAGE_PREFIX}${uid}` : null;
}

function loadWishlistForUser(uid) {
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

function saveWishlistForUser(uid, items) {
  const key = storageKey(uid);
  if (!key) return;
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch {
    // ignore
  }
}

/**
 * Wishlist is per user; currentUserId is set by auth sync (Layout).
 * Items are full product-shaped: { id, title, price, image, category, stock, description? }
 */
export const useWishlistStore = create((set, get) => ({
  currentUserId: null,
  items: [],

  setCurrentUser: (uid) => {
    const items = loadWishlistForUser(uid ?? null);
    set({ currentUserId: uid ?? null, items });
  },

  addItem: (product) => {
    const uid = get().currentUserId;
    if (!uid) return;
    set((state) => {
      if (state.items.some((i) => i.id === product.id)) return state;
      const next = [...state.items, { ...product }];
      saveWishlistForUser(state.currentUserId, next);
      return { items: next };
    });
  },

  removeItem: (id) => {
    const uid = get().currentUserId;
    if (!uid) return;
    set((state) => {
      const next = state.items.filter((i) => i.id !== id);
      saveWishlistForUser(state.currentUserId, next);
      return { items: next };
    });
  },

  hasItem: (id) => {
    return get().items.some((i) => i.id === id);
  },

  toggleItem: (product) => {
    const uid = get().currentUserId;
    if (!uid) return;
    set((state) => {
      const exists = state.items.some((i) => i.id === product.id);
      const next = exists
        ? state.items.filter((i) => i.id !== product.id)
        : [...state.items, { ...product }];
      saveWishlistForUser(state.currentUserId, next);
      return { items: next };
    });
  },

  moveToCart: (id) => {
    const state = get();
    if (!state.currentUserId) return;
    const product = state.items.find((i) => i.id === id);
    if (!product) return;
    useCartStore.getState().addItem(product, 1);
    state.removeItem(id);
  },
}));

export const selectWishlistCount = (state) => state.items.length;
