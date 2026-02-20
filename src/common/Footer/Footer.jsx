/**
 * Site footer: logo, newsletter, store links, shop categories, contact info.
 */
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaComments,
} from "react-icons/fa";
import logo from "../../assets/images/logo-02.svg";
import payment from "../../assets/images/bay ment.png";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="bg-(--footer-color) text-(--gray-color)">
      {/* TOP */}
      <div className="max-w-330 h-auto px-3 xl:px-24 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          {/* COL 1 */}
          <div className="flex flex-col gap-4 justify-center">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>

            <p className="text-[16px] leading-7 mb-7 max-w-125">
              What’s inside: New Arrivals, Exclusive Sales, News & Mores
            </p>

            <div className="flex w-full max-w-65">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-4 text-sm bg-(--white-color) rounded-l-md outline-none"
              />
              <button className="bg-(--main-color) cursor-pointer px-4 rounded-r-md text-white text-lg">
                →
              </button>
            </div>

            <div className="icons flex items-center gap-5 mt-3 text-lg">
              <FaFacebookF />
              <FaTwitter />
              <FaLinkedinIn />
              <FaYoutube />
              <FaInstagram />
            </div>
          </div>

          {/* COL 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-[18px] font-semibold my-5">
              Our Stores
            </h3>
            <ul className="flex flex-col gap-3 mt-4 text-[16px]">
              <li className=" hover:text-(--main-color) cursor-pointer delay-100  ">
                Delivery Information
              </li>
              <li className=" hover:text-(--main-color) cursor-pointer delay-100  ">
                Privacy Policy
              </li>
              <li className=" hover:text-(--main-color) cursor-pointer delay-100  ">
                Terms & Conditions
              </li>
              <li className=" hover:text-(--main-color) cursor-pointer delay-100  ">
                Support Center
              </li>
              <li className=" hover:text-(--main-color) cursor-pointer delay-100  ">
                Careers
              </li>
            </ul>
          </div>

          {/* COL 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-[18px] font-semibold mb-6">
              Shop Categories
            </h3>
            <ul className="flex flex-col gap-3 mt-4 text-[16px]">
              <li className=" hover:text-(--main-color) cursor-pointer delay-100 ">
                Contact Us
              </li>
              <li className=" hover:text-(--main-color) cursor-pointer delay-100 ">
                Information
              </li>
              <li className=" hover:text-(--main-color) cursor-pointer delay-100 ">
                About Us
              </li>
              <li className=" hover:text-(--main-color) cursor-pointer delay-100 ">
                Careers
              </li>
              <li className=" hover:text-(--main-color) cursor-pointer delay-100 ">
                Nest Stories
              </li>
            </ul>
          </div>

          {/* COL 4 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white text-[18px] font-semibold mb-6">
              Need Help? / Contact Us
            </h3>

            <ul className="flex flex-col gap-4 text-[18px]">
              <li className="flex gap-4 items-center w-max">
                <FaMapMarkerAlt className="text-[#6cbf44] mt-1" />
                <span className="text-white">
                  258 Daniel Street, 2589 Phones Line
                  <br />
                  Berlin, Germany
                </span>
              </li>

              <li className="flex gap-4 items-center w-max">
                <FaPhoneAlt className="text-[#6cbf44] mt-1" />
                <span className="text-white">
                  Call us between 8:00 AM - 12PM
                  <br />
                  <span className="text-[#6cbf44] font-semibold text-[17px]">
                    +25896 3158 3228
                  </span>
                </span>
              </li>

              <li className="flex gap-4 items-center w-max">
                <FaComments className="text-[#6cbf44] mt-1" />
                <span className="text-white">
                  Live Chat
                  <br />
                  Chat With an Experts
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#2a2a2a]">
        <div className="max-w-330 mx-auto px-3 xl:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[14px]">
          <p className="text-center text-white text-lg md:text-left">
            Copyright 2025 ©Ekomart. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {/* Payment Icons Here */}
            <p className="text-white text-lg">Payment Accepts:</p>
            <img src={payment} alt="payment icons" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
