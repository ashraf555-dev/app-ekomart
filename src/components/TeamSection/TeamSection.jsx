/**
 * Team section: 4 team member cards with image, name, role, phone.
 */
import img1 from "../../assets/imagesAbout/01.jpg";
import img2 from "../../assets/imagesAbout/02 (1).jpg";
import img3 from "../../assets/imagesAbout/03.jpg";
import img4 from "../../assets/imagesAbout/04.jpg";
import { FaPhoneVolume } from "react-icons/fa6";

const TEAM = [
  { name: "Samuel Alexander", role: "Design Director", phone: "+25896 3158 3228", img: img1 },
  { name: "Isabella Charlotte", role: "Design Director", phone: "+25896 3158 3228", img: img2 },
  { name: "William Ethan", role: "Design Director", phone: "+25896 3158 3228", img: img3 },
  { name: "Sophia Amelia", role: "Design Director", phone: "+25896 3158 3228", img: img4 },
];

export default function TeamSection() {
  return (
    <section className="px-4 sm:px-6 lg:px-24 py-16 lg:py-20 border-t border-gray-200 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center">
        <h2 className="text-2xl sm:text-4xl font-black text-(--secondary-color) mb-4">
          Meet Our Expert Team
        </h2>
        <p className="text-gray-500  font-extralight mb-20 text-center text-[16px] max-w-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pretium mollis ex, vel interdum augue faucibus sit amet. Proin tempor purus ac suscipit...
        </p>
        <div className=" w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM.map((member) => (
            <div key={member.name} className="group bg-white w-full h-max rounded-xl overflow-hidden text-center flex flex-col gap-2">
              <div className="aspect-3/4 overflow-hidden w-full h-80">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer"
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="font-semibold text-(--secondary-color) text-2xl">{member.name}</h3>
                <p className="text-gray-500 text-md font-medium mt-0.5">{member.role}</p>
                  <hr />
                <p className=" text-(--main-color) text-lg mt-1 flex items-center gap-3.5 justify-center cursor-pointer"> <FaPhoneVolume/> {member.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
