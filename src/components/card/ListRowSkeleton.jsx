import ContentLoader from "react-content-loader";

/**
 * Skeleton for list rows (wishlist/cart): thumb, title, subtitle, price, actions.
 * Responsive: matches flex-col sm:flex-row gap-4 py-6 border-b layout.
 */
export default function ListRowSkeleton() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 py-6 border-b border-gray-200">
      <ContentLoader
        viewBox="0 0 400 112"
        width="100%"
        height="112"
        preserveAspectRatio="xMidYMid meet"
        speed={1.2}
        backgroundColor="#f0f0f0"
        foregroundColor="#e8e8e8"
        className="block w-full"
        aria-label="Loading item"
      >
        {/* Thumb - sm:w-28 h-28 or w-24 h-24 */}
        <rect x="0" y="0" width="112" height="112" rx="8" ry="8" />
        {/* Title */}
        <rect x="128" y="8" width="180" height="18" rx="4" ry="4" />
        {/* Subtitle / category */}
        <rect x="128" y="34" width="120" height="14" rx="4" ry="4" />
        {/* Price */}
        <rect x="128" y="56" width="80" height="18" rx="4" ry="4" />
        {/* Buttons area */}
        <rect x="128" y="84" width="100" height="36" rx="6" ry="6" />
        <rect x="320" y="84" width="44" height="36" rx="6" ry="6" />
      </ContentLoader>
    </div>
  );
}
