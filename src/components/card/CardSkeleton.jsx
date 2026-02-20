import ProductCardSkeleton from "./ProductCardSkeleton";
import BlogCardSkeleton from "./BlogCardSkeleton";
import ListRowSkeleton from "./ListRowSkeleton";
import CompactProductSkeleton from "./CompactProductSkeleton";

/**
 * Reusable card skeleton. Variants match existing card layouts and Tailwind styling.
 * @param {'product'|'blog'|'listRow'|'productCompact'} variant
 */
export default function CardSkeleton({ variant = "product" }) {
  switch (variant) {
    case "blog":
      return <BlogCardSkeleton />;
    case "listRow":
      return <ListRowSkeleton />;
    case "productCompact":
      return <CompactProductSkeleton />;
    case "product":
    default:
      return <ProductCardSkeleton />;
  }
}

export { ProductCardSkeleton, BlogCardSkeleton, ListRowSkeleton, CompactProductSkeleton };
