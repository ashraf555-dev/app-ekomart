/**
 * Newsletter signup block. Email input + Subscribe button.
 * Currently not used in main layout; available for inclusion.
 */
export default function NewsletterSection() {
  return (
    <section className="px-6 lg:px-24 py-16">
      <div className="max-w-3xl mx-auto border rounded-lg p-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Subscribe to Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
          Get updates about new products and offers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            placeholder="Your email"
            className="border px-4 py-3 rounded w-full"
          />
          <button className="border px-6 py-3 rounded hover:scale-105 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
}
