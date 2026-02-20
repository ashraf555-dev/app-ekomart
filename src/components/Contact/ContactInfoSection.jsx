/**
 * Contact info section — Address, Email, Phone.
 * 3 columns on desktop, stacked on mobile. Matches original layout.
 * [ICON PLACEHOLDER] — Replace icon div content with custom icon if needed.
 */
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const INFO_ITEMS = [
  {
    label: "Address",
    value: "259 Daniel Road, FKT 2589 Berlin, Germany.",
    icon: FaMapMarkerAlt,
  },
  {
    label: "Phone",
    value: "+856 (76) 259 6328",
    icon: FaPhoneAlt,
  },
  {
    label: "Email",
    value: "info@example.com",
    icon: FaEnvelope,
  },
];

export default function ContactInfoSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-24 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INFO_ITEMS.map((item) => (
            <div key={item.label} className="flex items-center justify-center gap-4">
              {/* [ICON PLACEHOLDER] — Custom icon goes here */}
              <div className="w-12 h-12 rounded-full bg-(--main-color) text-white flex items-center justify-center shrink-0">
                <item.icon size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-(--secondary-color) mb-2">
                  {item.label}
                </h3>
                <p className="text-(--gray-color) text-base">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
