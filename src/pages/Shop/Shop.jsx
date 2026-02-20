/**
 * Shop page: product grid with search, category filter, sort.
 * Uses simulated API delay; products from data/products.js.
 */
import { useEffect, useState, useMemo } from "react";
import { getProducts } from "../../data/products";
import ProductCard from "../../components/card/ProductCard";
import ProductCardSkeleton from "../../components/card/ProductCardSkeleton";
import InfoStripSection from "../../components/ui/InfoStripSection";
import { INFO_STRIP_ITEMS } from "../../data/infoStripData";
import { delay } from "../../utils/delay";

import "./Shop.css";

const SKELETON_COUNT = 8;
const API_DELAY_MS = 2500;

const SORT_OPTIONS = [
  { value: "name", label: "Name A–Z" },
  { value: "nameDesc", label: "Name Z–A" },
  { value: "priceAsc", label: "Price: Low to High" },
  { value: "priceDesc", label: "Price: High to Low" },
];

/**
 * Filters by search + category, then sorts. Preserves original array.
 */
function filterAndSortProducts(products, searchQuery, categoryFilter, sortBy) {
  let list = products;

  if (searchQuery.trim()) {
    const q = searchQuery.trim().toLowerCase();
    list = list.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.category && p.category.toLowerCase().includes(q))
    );
  }

  if (categoryFilter) {
    list = list.filter((p) => p.category === categoryFilter);
  }

  const sorted = [...list].sort((a, b) => {
    switch (sortBy) {
      case "name":
        return (a.title || "").localeCompare(b.title || "");
      case "nameDesc":
        return (b.title || "").localeCompare(a.title || "");
      case "priceAsc":
        return (a.price ?? 0) - (b.price ?? 0);
      case "priceDesc":
        return (b.price ?? 0) - (a.price ?? 0);
      default:
        return 0;
    }
  });

  return sorted;
}

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sortBy, setSortBy] = useState("name");

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    setError(null);
    Promise.all([getProducts(), delay(API_DELAY_MS)])
      .then(([data]) => {
        if (!cancelled) setProducts(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err?.message ?? "Failed to load products.");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const categories = useMemo(() => {
    const set = new Set();
    products.forEach((p) => p.category && set.add(p.category));
    return ["", ...Array.from(set).sort()];
  }, [products]);

  const filteredProducts = useMemo(
    () => filterAndSortProducts(products, searchQuery, categoryFilter || null, sortBy),
    [products, searchQuery, categoryFilter, sortBy]
  );

  const handleClearFilters = () => {
    setSearchQuery("");
    setCategoryFilter("");
  };

  return (
    <section className="my-16 gap-12 pt-20 flex flex-col justify-between items-center min-h-max">
      <div className="w-full max-w-330 mx-auto flex flex-col gap-12 px-3 xl:px-24">
        <h1 className="text-5xl font-bold text-(--secondary-color) mb-6">
          All <span className="text-(--main-color)">Products</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 mb-8 flex-wrap">
          <div className="flex-1 min-w-50">
            <label htmlFor="shop-search" className="sr-only">
              Search products
            </label>
            <input
              id="shop-search"
              type="search"
              placeholder="Search by name, description, category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-12 px-4 rounded-md border border-gray-300 bg-(--white-color) outline-none focus:ring-2 focus:ring-(--main-color) focus:border-transparent transition"
            />
          </div>
          <div className="flex gap-3 flex-wrap">
            <label htmlFor="shop-category" className="sr-only">
              Filter by category
            </label>
            <select
              id="shop-category"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="h-12 px-4 rounded-md border border-gray-300 bg-(--white-color) outline-none focus:ring-2 focus:ring-(--main-color) min-w-45 transition"
            >
              <option value="">All categories</option>
              {categories.filter(Boolean).map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <label htmlFor="shop-sort" className="sr-only">
              Sort by
            </label>
            <select
              id="shop-sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-12 px-4 rounded-md border border-gray-300 bg-(--white-color) outline-none focus:ring-2 focus:ring-(--main-color) min-w-45 transition"
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: SKELETON_COUNT }, (_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        )}

        {error && (
          <div className="py-20 text-center">
            <p className="text-red-600 font-medium">{error}</p>
          </div>
        )}

        {!loading && !error && filteredProducts.length === 0 && (
          <div className="py-20 text-center text-(--gray-color)">
            <p className="text-lg mb-4">No products match your filters.</p>
            <button
              type="button"
              onClick={handleClearFilters}
              className="text-(--main-color) font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-(--main-color) rounded px-2 py-1"
            >
              Clear filters
            </button>
          </div>
        )}

        {!loading && !error && filteredProducts.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 card-grid-fade-in">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <InfoStripSection items={INFO_STRIP_ITEMS} />
    </section>
  );
}
