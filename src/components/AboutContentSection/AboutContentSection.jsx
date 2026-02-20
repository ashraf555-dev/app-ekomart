/**
 * About content: image + heading + description + bullet list.
 */
import img from "../../assets/imagesAbout/02.jpg";

export default function AboutContentSection() {
  const listItems = [
    "Elementum sociis rhoncus aptent auctor urna justo",
    "Habitasse venenatis gravida nisl, sollicitudin posuere",
    "Uisque cum convallis nostra in sapien nascetur, netus",
    "Class nunc aliquet nulla dis senectus lputate porta",
    "Aenean gravida a est ante nisl nostra dui hendrerit",
    "Bibendum venenatis dignissim non himenaeos eget",
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-24 py-16 lg:py-20 flex items-center justify-center flex-wrap gap-12 lg:flex-nowrap ">
      <div className="h-125 w-112.5 ">
        <img src={img} alt="" className="rounded-2xl w-full h-full object-cover" />
      </div>
      <div className="max-w-max flex flex-col gap-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-(--secondary-color) mb-6">
          Your Destination for Quality Produce and Pantry Essentials
        </h2>
        <p className="text-gray-400 text-base lg:text-[16px] leading-relaxed max-w-4xl mb-10 font-extralight">
          Venenatis augue consequat class magnis sed purus, euismod ligula nibh congue quis vestibulum nostra, cubilia varius velit vitae rhoncus. Turpis malesuada fringilla urna dui est torquent aliquet, mi nec fermentum placerat nisi venenatis sapien, mattis nunc nullam rutrum feugiat porta. Pharetra mi nisl consequat semper quam litora aenean eros conubia molestie erat, et cursus integer rutrum sollicitudin auctor curae inceptos senectus sagittis est,
        </p>
        <ul className="space-y-3 flex flex-col gap-3.5 max-w-2xl">
          {listItems.map((item, i) => (
            <li key={i} className=" font-extralight flex items-center gap-3 text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-(--secondary-color) shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
