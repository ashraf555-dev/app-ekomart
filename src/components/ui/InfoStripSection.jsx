/**
 * Promotional info strip with icon + title + description.
 * Renders a full-width colored bar (e.g. main brand color) with 4 feature items.
 * Used on Shop, Login, Register, WeeklyBestSeller, About (OfferStripSection).
 *
 * @param {Object} props
 * @param {Array} props.items - Array of { icon, title, desc }
 * @param {string} [props.containerClassName] - Class for inner container (e.g. "px-4 xl:px-24" or "" for Register)
 */
export default function InfoStripSection({ items, containerClassName = "px-4 xl:px-24" }) {
  return (
    <div className="bg-(--main-color) w-full py-10">
      <div className={containerClassName}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-white">
          {items.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-full bg-white text-(--main-color) flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="font-bold text-lg leading-snug">{item.title}</h4>
                <p className="text-sm leading-relaxed opacity-90 max-w-55">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
