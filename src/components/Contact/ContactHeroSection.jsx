/**
 * Hero section for About page. CTA with "Do You Want To Know Us?" and Contact link.
 */
import { Link } from "react-router-dom";

import "./ContactHeroSection.css";

export default function HeroSection() {
  return (
    <section className="secAboutHero flex items-center justify-center px-4 sm:px-6 lg:px-24 py-16 lg:py-24">
        <div className="order-2 lg:order-1 space-y-6 w-187.5 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Ask Us Question
          </h1>
          <p className="text-white text-base lg:text-md leading-relaxed text-center">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
          </p>
          <Link
            to="/about"
            className="inline-block bg-(--main-color) text-(--white-color) font-semibold px-6 py-3 rounded-md hover:bg-(--secondary-color) transition"
          >
            About Us
          </Link>
        </div>
    </section>
  );
}
