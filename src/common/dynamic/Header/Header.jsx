/**
 * Home page hero header: promo text, CTA, "Shop Now" button.
 */
import { FaArrowRightLong } from "react-icons/fa6";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header w-full px-4 sm:px-6 xl:px-24">
      <div className="secHead px-14 flex items-center min-h-105 lg:min-h-120">
        <div className="max-w-xl flex flex-col gap-4 sm:gap-6">
          {/* offer */}
          <p className="text-(--main-color) text-sm sm:text-base">
            Get up to 30% off on your first $150 purchase
          </p>

          {/* title */}
          <h1 className="text-(--secondary-color) font-extrabold leading-tight text-3xl sm:text-4xl lg:text-[44px]">
            Feed Your Family <br />
            at the Best Price
          </h1>

          {/* description */}
          <p className="text-(--gray-color) text-sm sm:text-base max-w-md">
            We have prepared special discounts for you on grocery products.
            Don't miss these opportunities...
          </p>

          {/* button */}
          <button
            className="
              mt-2
              w-fit
              px-6
              py-3
              rounded-md
              bg-(--main-color)
              text-(--white-color)
              font-medium
              flex
              items-center
              gap-2
              hover:opacity-90
              transition
            "
          >
            Shop Now <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
}
