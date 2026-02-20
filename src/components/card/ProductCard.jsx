import {
  FaHeart,
  FaSyncAlt,
  FaEye,
  FaShoppingCart,
  FaStar,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import { useWishlistStore } from "../../store/wishlistStore";
import useUser from "../../hooks/useUser";
import { formatPrice } from "../../utils/formatPrice";
import {
  showCartAddedToast,
  showWishlistAddedToast,
  showWishlistRemovedToast,
  showLoginRequiredAlert,
} from "../../common/NavBar/alerts";

/**
 * Product card matching original design. Uses cart/wishlist stores.
 * Product shape: id, title, price, image, category, stock, description, weight?, oldPrice?
 */
export default function ProductCard({ product }) {
  const user = useUser();
  const navigate = useNavigate();
  const addToCart = useCartStore((s) => s.addItem);
  const toggleWishlist = useWishlistStore((s) => s.toggleItem);
  const isInWishlist = useWishlistStore((s) =>
    s.items.some((i) => i.id === product.id)
  );

  const { id, title, price, oldPrice, image, category, stock, weight } = product;
  const outOfStock = stock < 1;

  const handleAddToCart = () => {
    if (outOfStock) return;
    if (!user) {
      showLoginRequiredAlert(navigate);
      return;
    }
    addToCart(product, 1);
    showCartAddedToast();
  };

  const handleToggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      showLoginRequiredAlert(navigate);
      return;
    }
    const wasInWishlist = isInWishlist;
    toggleWishlist(product);
    if (wasInWishlist) {
      showWishlistRemovedToast();
    } else {
      showWishlistAddedToast();
    }
  };

  return (
    <div className="relative shadow w-full h-auto overflow-hidden rounded-xl border border-gray-200 bg-white p-6 mb-6 group">
      <span className="absolute left-0 top-0 z-10 rounded-tl rounded-br bg-(--main-color) px-4 py-1.5 text-xs font-semibold text-white">
        ON SALE
      </span>
      <div
        className="absolute bottom-64 z-20 left-1/2 rounded-tl-md rounded-tr-md flex -translate-x-1/2 gap-4 bg-(--main-color) px-4 py-2.5 opacity-0 invisible scale-y-0 origin-bottom transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100 group-hover:visible"
        onClick={(e) => e.preventDefault()}
      >
        <FaHeart
          className={
            "cursor-pointer text-white " +
            (isInWishlist ? " opacity-100 fill-current" : " opacity-80")
          }
          onClick={handleToggleWishlist}
        />
        <FaSyncAlt className="cursor-pointer text-white" />
        <FaEye className="cursor-pointer text-white" />
      </div>
      <div className="relative w-full h-44 overflow-hidden group-hover:scale-110 transition-all duration-300 mb-4">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-3 py-6">
        <div className="mb-3 flex gap-1 text-orange-400">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <h3 className="mb-2 text-md font-semibold leading-5">{title}</h3>
        <p className="text-[16px] text-gray-500 mt-1 mb-2">
          {weight || category}
        </p>
        <div className="my-2 flex items-center gap-3">
          <span className="text-[19px] font-bold text-red-600">
            {formatPrice(price)}
          </span>
          {oldPrice != null && (
            <span className="text-sm text-gray-400 line-through">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
        <button
          type="button"
          disabled={outOfStock}
          className="flex w-full items-center justify-center gap-2 rounded bg-(--main-color) py-2.5 text-sm font-semibold text-white hover:bg-(--secondary-color) transition mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleAddToCart}
        >
          <span>{outOfStock ? "Out of stock" : "Add To Cart"}</span>
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
}
