import ContentLoader from "react-content-loader";

/**
 * Compact product skeleton for WeeklyBestSeller: image h-40, title, price.
 * Matches grid item layout: rounded-lg px-3 py-4, image h-40.
 */
export default function CompactProductSkeleton() {
  return (
    <div className="bg-white rounded-lg px-3 py-4 flex flex-col gap-3 border border-gray-100">
      <ContentLoader
        viewBox="0 0 200 260"
        width="100%"
        height="260"
        preserveAspectRatio="xMidYMid meet"
        speed={1.2}
        backgroundColor="#f0f0f0"
        foregroundColor="#e8e8e8"
        className="block w-full"
        aria-label="Loading product"
      >
        <rect x="0" y="0" width="200" height="160" rx="8" ry="8" />
        <rect x="0" y="172" width="180" height="16" rx="4" ry="4" />
        <rect x="0" y="196" width="80" height="14" rx="4" ry="4" />
      </ContentLoader>
    </div>
  );
}
