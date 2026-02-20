/**
 * Features section: "Why You Choose Us?" with 3 service cards.
 */
import icon1 from "../../assets/imagesAbout/01 (1).svg";
import icon2 from "../../assets/imagesAbout/02 (1).svg";
import icon3 from "../../assets/imagesAbout/03 (1).svg";
const SERVICES = [
  { num: "01", title: "Organic Food Services", desc: "When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.", img: icon1 },
  { num: "02", title: "Organic Food Services", desc: "When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.", img: icon2 },
  { num: "03", title: "Organic Food Services", desc: "When an unknown printer took a galley of type and scrambled it to make follow type specimen area book.", img: icon3 },
];

export default function FeaturesSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-24 py-24 lg:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-8 ">
        <h2 className="text-2xl sm:text-4xl font-black text-(--secondary-color) mb-4">
          Why You Choose Us?
        </h2>
        <p className="text-gray-500 font-extralight mb-10 max-w-2xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
        </p>
        <div className=" w-full h-max grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((item) => (
            <div key={item.num} className="flex flex-col gap-3 items-center min-w-full min-h-82 border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
              <div className="flex relative justify-center py-3 items-center mb-4">
                <span className="text-8xl absolute -top-4 z-0 font-bold text-gray-100">{item.num}</span>
                <div className="h-full w-26 rounded-lg z-10 overflow-hidden shrink-0">
                  <img src={item.img} alt="" className="w-full h-full object-cover" />
                </div>
              </div>
              <hr className="w-full" />
              <h3 className="text-lg xl:text-xl font-black text-(--secondary-color)">{item.title}</h3>
              <p className="text-gray-500 lg:text-sm text-center leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
