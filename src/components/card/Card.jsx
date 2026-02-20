/**
 * LEGACY: Prop-based product card. Not used. ProductCard.jsx is the active implementation
 * (uses Zustand cart/wishlist stores). Kept for reference; safe to remove if not needed.
 */
import {
  FaHeart,
  FaSyncAlt,
  FaEye,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";

export default function ProductCard({
  id,
  title,
  image,
  weight,
  price,
  oldPrice,
  onAddToCart,
  onToggleWishlist,
  isInWishlist,
}) {
  return (
    <div className="relative shadow w-full h-auto overflow-hidden rounded-xl border border-gray-200 bg-white p-6 mb-6 group">
      {/* SALE BADGE */}
      <span className="absolute left-0 top-0 z-10 rounded-tl rounded-br bg-(--main-color) px-4 py-1.5 text-xs font-semibold text-white">
        ON SALE
      </span>
      {/* HOVER ACTIONS */}
      <div
        className="absolute bottom-64 z-20 left-1/2 rounded-tl-md rounded-tr-md flex -translate-x-1/2 gap-4 bg-(--main-color)  px-4 py-2.5
                        opacity-0 invisible scale-y-0 origin-bottom transition-all duration-300
                        group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible"
      >
        <FaHeart
          className={
            "cursor-pointer text-white" +
            (isInWishlist && isInWishlist(id) ? " opacity-80" : "")
          }
          onClick={
            onToggleWishlist
              ? () =>
                  onToggleWishlist({
                    id,
                    title,
                    image,
                    weight,
                    price,
                    oldPrice,
                  })
              : undefined
          }
        />
        <FaSyncAlt className="cursor-pointer text-white" />
        <FaEye className="cursor-pointer text-white" />
      </div>
      {/* IMAGE */}
      <div className="relative w-full h-44 overflow-hidden group-hover:scale-110 transition-all duration-300 mb-4">
        <img src={image} alt="product" className="w-full h-full object-cover" />
      </div>
      {/* CONTENT */}
      <div className="flex flex-col gap-3 py-6">
        {/* STARS */}
        <div className="mb-3 flex gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <h3 className="mb-2 text-md font-semibold leading-5">{title}</h3>
        <p className="text-[16px] text-gray-500 mt-1 mb-2"> {weight} </p>
        {/* PRICE */}
        <div className="my-2 flex items-center gap-3">
          <span className="text-[19px] font-bold text-red-600">{price}</span>
          <span className="text-sm text-gray-400 line-through">{oldPrice}</span>
        </div>
        {/* ADD TO CART */}
        <button
          className="flex w-full items-center justify-center gap-2 rounded bg-(--main-color) py-2.5 text-sm font-semibold text-white hover:bg-(--secondary-color) transition mt-2"
          onClick={
            onAddToCart
              ? () => onAddToCart({ id, title, image, weight, price, oldPrice })
              : undefined
          }
        >
          <span>Add To Cart</span>
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
}
