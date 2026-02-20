/**
 * Map section — embeds location map.
 * [MAP PLACEHOLDER] — Replace iframe src for different location.
 * Size and responsiveness match original.
 */
const BERLIN_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.637475759232!2d13.404954!3d52.520008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sde!4v1700000000";

export default function MapSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-24 py-16" aria-label="Store location map">
      <div className="max-w-7xl mx-auto">
        <div className="w-full aspect-video lg:aspect-21/9 rounded-xl overflow-hidden border border-gray-200">
          {/* [MAP PLACEHOLDER] — Replace src for different map location */}
          <iframe
            src={BERLIN_MAP_EMBED}
            title="Store location"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
