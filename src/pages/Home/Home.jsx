/**
 * Home page: hero header, slider, promo blocks, product sections, blog.
 */
import Header from "../../common/dynamic/Header/Header";
import Slider from "../../components/slider/slider";
import DivGetEveryDay from "../../components/DivGetEvryDay/DivGetEveryDay";
import WeeklyBestSeller from "../../components/WeeklyBestSeller/WeeklyBestSeller";
import DealsProduct from "../../components/DealsProduct/DealsProduct";
import ProductsSection from "../../components/productSection/productSection";
import BlogSection from "../../components/BlogSection/BlogSection";

import "./Home.css";

export default function Home() {
  return (
    <section className="my-16 flex flex-col gap-12 pb-8">
      <Header />
      <Slider />
      <DivGetEveryDay />
      <WeeklyBestSeller />
      <DealsProduct />
      <ProductsSection />
      <BlogSection />
    </section>
  );
}
