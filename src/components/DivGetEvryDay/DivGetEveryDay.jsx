/**
 * "Get Everyday Fresh" promo block. Two side-by-side cards with product images.
 */
import "./DivGetEveryDay.css";
import bg from "../../assets/images/01 (1).jpg";
import img1 from "../../assets/images/01 (1).png";
import img2 from "../../assets/images/02 (2).png";

export default function DivGetEveryDay() {
  const images = [img1, img2];

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 xl:px-24">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative h-63.75 rounded-lg overflow-hidden"
        >
          {/* background */}
          <img
            src={bg}
            alt="bg"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* content */}
          <div className="relative z-10 h-full flex items-center">
            {/* text */}
            <div className="pl-6 sm:pl-8 lg:pl-10 max-w-[65%]">
              <h3 className="text-[#1f3d1b] font-extrabold leading-snug text-lg sm:text-xl lg:text-2xl">
                Get Everyday Fresh <br />
                <span className="font-extrabold">
                  Organic <span className="font-normal">Vegetable</span>
                </span>
              </h3>

              <div className="mt-4">
                <span className="block text-sm text-[#6fa016]">Only</span>
                <span className="text-2xl font-bold text-[#6fa016]">
                  $15.00
                </span>
              </div>
            </div>

            {/* product image */}
            <img
              src={image}
              alt="product"
              className="
                absolute
                right-4
                bottom-0
                w-35
                sm:w-42.5
                lg:w-50
                object-contain
              "
            />
          </div>
        </div>
      ))}
    </div>
  );
}
