/**
 * Blog page placeholder. Displays intro text for the blog section.
 */
import "./Blog.css";

export default function Blog() {
  return (
    <div className="">
      <div className="max-w-330 h-auto px-3 xl:px-24 py-20">
        <h1 className="text-3xl font-bold text-(--secondary-color) mb-6">
          Blog
        </h1>
        <p className="text-(--gray-color) leading-relaxed mb-4">
          Check out our latest articles and updates about organic living and
          healthy products.
        </p>
      </div>
    </div>
  );
}
