/**
 * Product sections: Recently Added, Top Selling, Top Rated, Deals of the day.
 * Each section shows 2 products with "See More" link to shop.
 */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../../data/products";
import ProductCard from "../card/ProductCard";
import ProductCardSkeleton from "../card/ProductCardSkeleton";
import { delay } from "../../utils/delay";

const API_DELAY_MS = 2500;
const SKELETON_COUNT_PER_SECTION = 2;

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    Promise.all([getProducts(), delay(API_DELAY_MS)])
      .then(([data]) => {
        if (!cancelled) setProducts(data);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  const recentlyAdded = products.slice(6, 8);
  const topSelling = products.slice(8, 10);
  const topRated = products.slice(2, 4);
  const dealsOfTheDay = products.slice(0, 2);

  const sections = [
    { title: "Recently Added", items: recentlyAdded },
    { title: "Top Selling", items: topSelling },
    { title: "Top Rated", items: topRated },
    { title: "Deals of the day", items: dealsOfTheDay },
  ];

  return (
    <section className="px-3 sm:px-6 xl:px-24">
      <div className="max-w-7xl mx-auto space-y-10 flex flex-col gap-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="shadow rounded-xl p-4 sm:p-5 capitalize flex flex-col gap-4.5"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-base sm:text-2xl font-semibold">
                  {section.title}
                </h2>
                <Link
                  to="/shop"
                  className="px-3 py-1 border rounded text-md bg-(--main-color) text-white font-bold"
                >
                  See More
                </Link>
              </div>
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {Array.from({ length: SKELETON_COUNT_PER_SECTION }, (_, i) => (
                    <ProductCardSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 card-grid-fade-in">
                  {section.items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
