/**
 * Contact page footer section — social media links.
 * [ICON PLACEHOLDER] — Replace with custom social icons if needed.
 */
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const SOCIAL_LINKS = [
  { href: "#", label: "Facebook", icon: FaFacebookF },
  { href: "#", label: "Twitter", icon: FaTwitter },
  { href: "#", label: "LinkedIn", icon: FaLinkedinIn },
  { href: "#", label: "YouTube", icon: FaYoutube },
  { href: "#", label: "Instagram", icon: FaInstagram },
];

export default function FooterSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-24 py-16 bg-(--footer-color) text-(--gray-color)">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-(--main-color) focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:ring-offset-2 focus:ring-offset-(--footer-color) transition"
              aria-label={item.label}
            >
              {/* [ICON PLACEHOLDER] — Custom icon component */}
              <item.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
