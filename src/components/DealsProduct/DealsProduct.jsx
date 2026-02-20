/**
 * Deals of the day section. Product grid (first 4) + healthy vegetable promo block.
 */
import { useEffect, useState } from "react";
import { getProducts } from "../../data/products";
import ProductCard from "../card/ProductCard";
import ProductCardSkeleton from "../card/ProductCardSkeleton";
import { delay } from "../../utils/delay";
import "./DealsProduct.css";

const DEALS_COUNT = 4;
const SKELETON_COUNT = 4;
const API_DELAY_MS = 2500;

export default function DealsProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect
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

  const deals = products.slice(0, DEALS_COUNT);

  return (
    <section className="w-full min-h-max py-6 flex flex-col gap-8 px-3 xl:px-24">
      <div className="flex flex-col py-6 gap-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-8 rounded-full bg-yellow-600 opacity-60" />
          <h2 className="text-xl md:text-3xl font-bold text-(--secondary-color) capitalize">
            Deals of the day
          </h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: SKELETON_COUNT }, (_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 card-grid-fade-in">
            {deals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <div className="healthy w-full relative ">
        <div className="absolute left-12 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
          <p className="text-yellow-500 text-[10px] xl:text-[13px] font-semibold">
            Weekend Discount
          </p>
          <b className="text-white text-[16px] lg:text-[23px]">
            Healthy vegetable that you deserve to eat fresh
          </b>
          <p className="text-[#ffffff5b] text-[13px] lg:text-[15px] w-2/3 font-extralight ">
            We have prepared special discounts for you on grocery products.
            Don&apos;t miss these opportunities...
          </p>
        </div>
      </div>
    </section>
  );
}
