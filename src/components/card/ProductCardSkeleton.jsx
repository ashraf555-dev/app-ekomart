import ContentLoader from "react-content-loader";

/**
 * Skeleton placeholder matching ProductCard layout: image, title, price, button.
 * Responsive: width 100%, height scales with aspect; use in same grid as ProductCard.
 */
export default function ProductCardSkeleton() {
  const viewBox = "0 0 280 400";

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-gray-200 bg-white p-6 mb-6">
      <ContentLoader
        viewBox={viewBox}
        width="100%"
        height="400"
        preserveAspectRatio="xMidYMid meet"
        speed={1.2}
        backgroundColor="#f0f0f0"
        foregroundColor="#e8e8e8"
        className="block w-full"
        aria-label="Loading product"
      >
        {/* Image placeholder - matches ProductCard h-44 (176px) */}
        <rect x="0" y="0" width="280" height="176" rx="8" ry="8" />
        {/* Stars row */}
        <rect x="0" y="188" width="120" height="14" rx="4" ry="4" />
        {/* Title line 1 */}
        <rect x="0" y="212" width="280" height="16" rx="4" ry="4" />
        {/* Title line 2 */}
        <rect x="0" y="234" width="200" height="16" rx="4" ry="4" />
        {/* Weight / category */}
        <rect x="0" y="258" width="100" height="14" rx="4" ry="4" />
        {/* Price */}
        <rect x="0" y="282" width="72" height="20" rx="4" ry="4" />
        {/* Old price (smaller) */}
        <rect x="80" y="286" width="48" height="14" rx="4" ry="4" />
        {/* Add to cart button */}
        <rect x="0" y="318" width="280" height="44" rx="8" ry="8" />
      </ContentLoader>
    </div>
  );
}
