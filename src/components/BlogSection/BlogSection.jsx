/**
 * Latest blog posts section. 3 blog cards with image, meta, title.
 */
import { useEffect, useState } from "react";
import BlogCardSkeleton from "../card/BlogCardSkeleton";
import { delay } from "../../utils/delay";
import "./BlogSection.css";
//  images
import blog1 from "../../assets/images/01.jpg";
import blog2 from "../../assets/images/02.jpg";
import blog3 from "../../assets/images/03.jpg";

const BLOGS_DATA = [
  {
    id: 1,
    title: "Fashion Fixation: Fueling Your Passion for All Things Stylish",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    image: blog1,
  },
  {
    id: 2,
    title: "Fashion Fixation: Fueling Your Passion for All Things Stylish",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    image: blog2,
  },
  {
    id: 3,
    title: "Fashion Fixation: Fueling Your Passion for All Things Stylish",
    date: "15 Sep, 2023",
    category: "Modern Fashion",
    image: blog3,
  },
];

const API_DELAY_MS = 2500;
const SKELETON_COUNT = 3;

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    delay(API_DELAY_MS).then(() => {
      if (!cancelled) setBlogs(BLOGS_DATA);
    }).finally(() => {
      if (!cancelled) setLoading(false);
    });
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="px-4 md:px-12 lg:px-24 py-10 flex flex-col gap-10">
      {/* Title */}
      <h2 className="text-3xl text-(--secondary-color) font-semibold mb-8">
        Latest Blog Post Insights
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-100 p-6 rounded-lg">
        {loading ? (
          Array.from({ length: SKELETON_COUNT }, (_, i) => (
            <BlogCardSkeleton key={i} />
          ))
        ) : (
          blogs.map((el) => (
          <div
            key={el.id}
            className="group shadow bg-white rounded-lg overflow-hidden flex flex-col cursor-pointer card-grid-fade-in"
          >
            {/* Image (Placeholder) */}
            <div className="h-56 bg-gray-200 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
              <img
                src={el.image}
                alt=""
                className="w-full h-full object-cover  "
              />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4 flex-1">
              {/* Meta */}
              <div className="flex gap-6 text-sm text-gray-500">
                <span> {el.date} </span>
                <span> {el.category} </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold leading-snug hover:text-(--main-color) transition duration-300">
                {el.title}
              </h3>

              {/* Action */}
              <button className="mt-auto flex items-center gap-3 text-sm font-medium">
                <span className="w-7 h-7 border text-2xl text-(--main-color) bg-green-100 rounded-full flex items-center justify-center">
                  +
                </span>
                Read Details
              </button>
            </div>
          </div>
          ))
        )}
      </div>
    </section>
  );
}
