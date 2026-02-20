import ContentLoader from "react-content-loader";

/**
 * Skeleton for blog cards: image (h-56), meta, title, button.
 * Matches BlogSection card layout and Tailwind styling.
 */
export default function BlogCardSkeleton() {
  return (
    <div className="rounded-lg overflow-hidden flex flex-col bg-white shadow border border-gray-100">
      <ContentLoader
        viewBox="0 0 340 360"
        width="100%"
        height="360"
        preserveAspectRatio="xMidYMid meet"
        speed={1.2}
        backgroundColor="#f0f0f0"
        foregroundColor="#e8e8e8"
        className="block w-full"
        aria-label="Loading blog post"
      >
        {/* Image - h-56 (224px) */}
        <rect x="0" y="0" width="340" height="224" />
        {/* Meta row (date, category) */}
        <rect x="0" y="240" width="180" height="14" rx="4" ry="4" />
        {/* Title */}
        <rect x="0" y="268" width="320" height="20" rx="4" ry="4" />
        <rect x="0" y="296" width="240" height="20" rx="4" ry="4" />
        {/* Read button */}
        <rect x="0" y="324" width="120" height="36" rx="6" ry="6" />
      </ContentLoader>
    </div>
  );
}
