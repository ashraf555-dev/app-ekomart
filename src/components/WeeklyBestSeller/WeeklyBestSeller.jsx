/**
 * Weekly Best Seller section on Home. Compact product grid + promo strip.
 * Uses local mock data with simulated API delay.
 */
import { useEffect, useState } from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import { BiRefresh } from "react-icons/bi";

import img1 from "../../assets/images/01 (2).png";
import img2 from "../../assets/images/02 (1).png";
import img3 from "../../assets/images/03 (1).png";
import img4 from "../../assets/images/04 (2).png";
import img5 from "../../assets/images/06 (1).png";
import img6 from "../../assets/images/05 (2).png";

import CompactProductSkeleton from "../card/CompactProductSkeleton";
import InfoStripSection from "../ui/InfoStripSection";
import { INFO_STRIP_ITEMS } from "../../data/infoStripData";
import { delay } from "../../utils/delay";

const PRODUCTS_DATA = [
  { id: 1, title: "Super Fresh Meat", price: "29.99", image: img1 },
  { id: 2, title: "Super Fresh Mutton", price: "34.99", image: img2 },
  { id: 3, title: "Original Fresh Fruit", price: "19.99", image: img3 },
  { id: 4, title: "Organic Fresh Fruit", price: "24.99", image: img4 },
  { id: 5, title: "Lite Fresh Fruit", price: "17.99", image: img5 },
  { id: 6, title: "Smart Fresh Fruit", price: "22.99", image: img6 },
];

const API_DELAY_MS = 2500;
const SKELETON_COUNT = 6;

export default function WeeklyBestSeller() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    delay(API_DELAY_MS)
      .then(() => {
        if (!cancelled) setProducts(PRODUCTS_DATA);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="bg-gray-200 w-full min-h-max my-5 flex flex-col gap-8">
      <div className="flex flex-col py-12 gap-14 px-3 xl:px-24">
        <div className="flex items-center gap-4 mb-8">
          <span className="w-8 h-8 rounded-full bg-yellow-600 opacity-60" />
          <h2 className="text-xl md:text-3xl font-bold text-(--secondary-color)">
            Weekly Best Seller Grocery
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {loading ? (
            Array.from({ length: SKELETON_COUNT }, (_, i) => (
              <CompactProductSkeleton key={i} />
            ))
          ) : (
            products.map((item) => (
              <div
                key={item.id}
                className="group relative bg-white rounded-lg px-3 py-4 text-center flex flex-col gap-3 card-grid-fade-in"
              >
                <div className="relative h-40 flex items-center justify-center border border-gray-300 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full object-cover"
                  />
                  <div className="absolute origin-bottom scale-y-0 bottom-0 group-hover:scale-y-100 opacity-0 group-hover:opacity-100 transition duration-300">
                    <div className="bg-(--main-color) rounded-tl-md rounded-tr-md px-6 flex items-center gap-2 py-2.5 text-white text-sm">
                      <FaHeart className="cursor-pointer" />
                      <BiRefresh className="cursor-pointer" />
                      <FaEye className="cursor-pointer" />
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-medium text-(--secondary-color)">
                  {item.title}
                </h3>
                <p className="text-(--main-color) text-md">{item.price}</p>
              </div>
            ))
          )}
        </div>
      </div>

      <InfoStripSection items={INFO_STRIP_ITEMS} />
    </section>
  );
}
