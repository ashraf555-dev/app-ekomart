/**
 * Main navigation: top bar, logo, search, account/cart/wishlist.
 * Sticky nav on scroll. Account modal: login/register/logout.
 */
import "./NavBar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-02.svg";
import logo2 from "../../assets/images/logo-01.svg";
// icons
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { MdAccountBox } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { CiApple } from "react-icons/ci";
import { GiChickenLeg } from "react-icons/gi";
import { LiaBreadSliceSolid } from "react-icons/lia";
import { GiChipsBag } from "react-icons/gi";
import { FaBriefcaseMedical } from "react-icons/fa";
import { GiFrozenOrb } from "react-icons/gi";
import { LuShoppingBasket } from "react-icons/lu";
import { PiExclamationMarkFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import useUserName from "../../hooks/useUserName";
import Swal from "sweetalert2";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase";
import { showLoadingAlert, showSuccessAlert, showErrorAlert } from "./alerts";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa"; // close icon for mobile menu
import { IoIosCall, IoIosMail } from "react-icons/io"; // mobile footer icons

import {
  useCartStore,
  selectCartCount,
  selectCartSubtotal,
} from "../../store/cartStore";
import {
  useWishlistStore,
  selectWishlistCount,
} from "../../store/wishlistStore";
import { formatPrice } from "../../utils/formatPrice";

const FREE_SHIPPING_THRESHOLD = 125;
/** Pixels scrolled before bottom nav becomes sticky */
const STICKY_SCROLL_THRESHOLD = 110;

export default function NavBar() {
  const [isFixed, setIsFixed] = useState(false);
  const cartCount = useCartStore(selectCartCount);
  const cartSubtotal = useCartStore(selectCartSubtotal);
  const wishlistCount = useWishlistStore(selectWishlistCount);

  // Make bottom nav bar sticky after scrolling past threshold
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > STICKY_SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const userName = useUserName();
  const navigate = useNavigate();

  const handleAccountClick = () => {
    Swal.fire({
      title: "Welcome to EkoMart!",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: " login ",
      denyButtonText: " register ",
      cancelButtonText: " logout ",
      customClass: {
        confirmButton: "swal2-confirm",
        denyButton: "swal2-deny",
        cancelButton: "swal2-cancel",
      },
      buttonsStyling: true,
      confirmButtonColor: "#3085d6", // blue
      denyButtonColor: "#28a745", // green
      cancelButtonColor: "#dc3545", // red
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      } else if (result.isDenied) {
        navigate("/register");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        showLoadingAlert("logging out ...");
        signOut(auth)
          .then(() => {
            showSuccessAlert(" logged out successfully ", () => navigate("/"));
          })
          .catch((err) => {
            showErrorAlert(
              err.message || "An error occurred while logging out",
            );
          });
      }
    });
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false,
  );

  // handle window resize: track desktop/mobile and close mobile menu if needed
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 1024;
      setIsDesktop(desktop);
      if (desktop && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleEsc = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <nav className="NavBar flex flex-col w-full h-max pt-1.5 shadow-2xl lg:bg-(--secondary-color)">
      {/*  the top and static nav  */}
      <div className="px-2 xl:px-24 items-center justify-between py-3 lg:flex hidden  ">
        <p className=" text-(--white-color) font-medium text-[13px] ">
          Welcome to our Organic store EkoMart!
        </p>
        <ul className="flex items-center gap-5">
          <li>
            <Link
              to="/"
              className=" text-(--white-color) font-medium text-(12px) "
            >
              Track Order
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className=" text-(--white-color) font-medium text-(12px) "
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className=" text-(--white-color) font-medium text-(12px) "
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className=" text-(--white-color) font-medium text-(12px) "
            >
              FAQ
            </Link>
          </li>
        </ul>
      </div>
      <hr className="lg:block hidden" />
      <div className="h-28 px-2 xl:px-24 flex items-center justify-between">
        <Link to={"/"}>
          <img src={logo} alt="" className=" lg:block hidden" />
          <img src={logo2} alt="" className=" lg:hidden block " />
        </Link>

        <div className=" lg:flex hidden items-center relative bg-(--white-color) h-12 w-130 rounded-md ">
          <div className="cat relative grow flex items-center h-full px-4.5 capitalize ">
            <span className=" catSpan flex items-center gap-1.5">
              <FaBarsStaggered /> categories
            </span>
            <div className="dropdown absolute left-0 rounded shadow-md top-full w-64 py-5 bg-(--white-color) ">
              <ol className="w-full h-full flex flex-col gap-0">
                <li className=" flex items-center ">
                  <Link
                    to="/shop"
                    className="dropLink flex gap-4.5 items-center text-sm"
                  >
                    <CiApple className="i text-(--main-color) text-2xl" />
                    breakfast & dairy
                  </Link>
                </li>
                <li className=" flex items-center ">
                  <Link
                    to="/shop"
                    className="dropLink flex gap-4.5 items-center text-sm"
                  >
                    <GiChickenLeg className="i text-(--main-color) text-xl" />
                    meats & seafood
                  </Link>
                </li>
                <li className=" flex items-center ">
                  <Link
                    to="/shop"
                    className="dropLink flex gap-4.5 items-center text-sm"
                  >
                    <LiaBreadSliceSolid className="i text-(--main-color) text-xl" />
                    breads & bakery
                  </Link>
                </li>
                <li className=" flex items-center ">
                  <Link
                    to="/shop"
                    className="dropLink flex gap-4.5 items-center text-sm"
                  >
                    <GiChipsBag className="i text-(--main-color) text-xl" />
                    chips & snacks
                  </Link>
                </li>
                <li className=" flex items-center ">
                  <Link
                    to="/shop"
                    className="dropLink flex gap-4.5 items-center text-sm"
                  >
                    <FaBriefcaseMedical className="i text-(--main-color) text-xl" />
                    medical healthcare
                  </Link>
                </li>
                <li className=" flex items-center ">
                  <Link
                    to="/shop"
                    className="dropLink flex gap-4.5 items-center text-sm"
                  >
                    <GiChipsBag className="i text-(--main-color) text-xl" />
                    biscuits & snacks
                  </Link>
                </li>
                <li className=" flex items-center ">
                  <Link
                    to="/shop"
                    className="dropLink flex gap-4.5 items-center text-sm"
                  >
                    <GiFrozenOrb className="i text-(--main-color) text-xl" />
                    frozen food
                  </Link>
                </li>
                <li className=" flex items-center ">
                  <Link
                    to="/shop"
                    className="dropLink flex gap-4.5 items-center text-sm"
                  >
                    <LuShoppingBasket className="i text-(--main-color) text-xl" />
                    grocery & staples
                  </Link>
                </li>
                <li className=" flex items-center ">
                  <Link
                    to="/shop"
                    className="dropLink flex gap-4.5 items-center text-sm"
                  >
                    <PiExclamationMarkFill className="i text-(--main-color) text-xl" />
                    other items
                  </Link>
                </li>
              </ol>
            </div>
          </div>
          <input
            className=" grow-3 w-full h-full placeholder: px-2.5 "
            type="search"
            placeholder="Search for product, categories or brand"
          />
          <span className=" absolute top-1/2 -translate-y-1/2 right-2 flex items-center gap-1 px-2 py-1.5 capitalize text-(--white-color) rounded-md bg-(--main-color) ">
            search <IoIosSearch className="text-xl" />
          </span>
        </div>

        <div className=" flex items-center justify-center gap-6">
          <div
            className="span sm:flex hidden items-center justify-center gap-2 h-12 min-w-18.75 py-2 px-5 cursor-pointer"
            onClick={handleAccountClick}
          >
            <MdAccountBox />
            {userName ? (
              <span className="font-semibold text-(--main-color)">
                {userName}
              </span>
            ) : (
              "account"
            )}
          </div>

          <div
            to="/wishlist"
            className="span flex items-center justify-center gap-2 h-12 min-w-18.75 py-2 px-5 relative"
          >
            <article className="relative">
              <FaRegHeart />
              <span className="circle">{wishlistCount}</span>
            </article>
            <span className="lg:hidden">wishlist</span>
            <div className="drop">
              <b className="drop-title">
                Wishlist (<span>{wishlistCount}</span>)
              </b>
              <p className="drop-row">
                <span className="textBold">
                  {wishlistCount} item{wishlistCount !== 1 ? "s" : ""}
                </span>
              </p>
              <div>
                <Link to="/wishlist" className="drop-btn">
                  View Wishlist
                </Link>
              </div>
            </div>
          </div>

          <div className="span flex items-center justify-center gap-2 h-12 min-w-18.75 py-2 px-5 relative">
            <article className="relative">
              <IoCartOutline />
              <span className="circle">{cartCount}</span>
            </article>
            <span className="lg:hidden">cart</span>
            <div className="drop">
              <b className="drop-title">
                Shopping Cart (<span>{cartCount}</span>)
              </b>
              <p className="drop-row">
                Sub total{" "}
                <span className="price">{formatPrice(cartSubtotal)}</span>
              </p>
              <div
                className="drop-progress"
                style={{
                  ["--cart-progress"]:
                    cartSubtotal >= FREE_SHIPPING_THRESHOLD
                      ? "100%"
                      : `${(cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100}%`,
                }}
              >
                <div className="drop-progress-fill" />
              </div>
              <p className="drop-row">
                {cartSubtotal >= FREE_SHIPPING_THRESHOLD ? (
                  <span className="textBold">Free Shipping unlocked!</span>
                ) : (
                  <>
                    Spend{" "}
                    <span className="textBold">
                      {formatPrice(FREE_SHIPPING_THRESHOLD - cartSubtotal)}
                    </span>{" "}
                    more for <span className="textBold">Free Shipping</span>
                  </>
                )}
              </p>
              <div className="flex gap-10 justify-center items-center mt-2">
                <Link to="/cart" className="drop-btn">
                  View Cart
                </Link>
                <Link to="/cart" className="drop-btn bt">
                  Check out
                </Link>
              </div>
            </div>
          </div>

          {/* search icon (desktop only) */}
          <div className="span lg:hidden flex items-center justify-center gap-2 h-12 min-w-18.75 py-2 px-5">
            <IoIosSearch className="text-xl" />
          </div>

          {/* Hamburger (always visible) */}
          <div className="span lg:hidden flex items-center justify-center gap-2 h-12 min-w-18.75 py-2 px-5">
            <button
              className="text-2xl text-(--black-color)"
              onClick={() => {
                setMobileMenuOpen((prev) => !prev);
              }}
              aria-label="Toggle menu"
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>
      {/*  the last and task scrollY nav  */}
      {/* overlay dimming background (mobile only) */}
      <div
        className={`mobile-overlay lg:hidden ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      <div
        className={`div
    flex
    lg:flex
    w-full
    items-center
    justify-between
    px-2
    xl:px-24
    h-16
    bg-(--main-color)
    ${mobileMenuOpen ? "menu-open" : "menu-closed"}
    ${isFixed && isDesktop ? " fixed top-0 left-0 z-50 shadow-2xl" : ""}
  `}
      >
        {/* close button inside mobile menu */}
        {mobileMenuOpen && (
          <button
            className="mobile-close-btn lg:hidden text-2xl text-(--black-color)"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        )}

        {/* mobile header (search + toggles) */}
        {mobileMenuOpen && (
          <div className="mobile-menu-header flex flex-col gap-2 w-full mb-4">
            <input
              type="search"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <div className="flex gap-2">
              <button className="flex-1 bg-(--main-color) text-(--white-color) px-4 py-2 rounded">
                Menu
              </button>
              <button className="flex-1 bg-(--white-color) text-(--main-color) px-4 py-2 rounded border border-(--main-color)">
                Category
              </button>
            </div>
          </div>
        )}

        <ul className="flex items-center justify-center gap-8">
          <li>
            <NavLink
              to="/"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              About
            </NavLink>
          </li>
          <li className=" relative">
            <NavLink
              to="/shop"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Shop
            </NavLink>
            <div className="dropDownLinks min-w-50 rounded-lg shadow z-20 bg-(--white-color) absolute top-full left-0 p-1.5 py-2.5 ">
              <ol className="flex flex-col gap-1 p-1.5 ">
                <li className="px-2 py-1.5 ">
                  <Link
                    to="/cart"
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    cart
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    to="/wishlist"
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    wishlist
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    to="/shop"
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    product
                  </Link>
                </li>
              </ol>
            </div>
          </li>
          <li className=" relative">
            <NavLink
              to="/vendors"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Vendors
            </NavLink>
            <div className="dropDownLinks min-w-50 rounded-lg shadow z-20 bg-(--white-color) absolute top-full left-0 p-1.5 py-2.5 ">
              <ol className="flex flex-col gap-1 p-1.5 ">
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    vendor list
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    vendor grid
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    vendor list details
                  </Link>
                </li>
              </ol>
            </div>
          </li>
          <li className=" relative">
            <NavLink
              to="/pages"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Pages
            </NavLink>
            <div className="dropDownLinks min-w-50 rounded-lg shadow z-20 bg-(--white-color) absolute top-full left-0 p-1.5 py-2.5 ">
              <ol className="flex flex-col gap-1 p-1.5 ">
                <li className="px-2 py-1.5 ">
                  <Link
                    to={"/about"}
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    store
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    invoice
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    to={"/contact"}
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    to={"/register"}
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    register
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    to={"/login"}
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    login
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    privacy Policy
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    cookies Policy
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    terms & condition
                  </Link>
                </li>
              </ol>
            </div>
          </li>
          <li className="relative">
            <NavLink
              to="/blog"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Blog
            </NavLink>
            <div className="dropDownLinks min-w-50 rounded-lg shadow z-20 bg-(--white-color) absolute top-full left-0 p-1.5 py-2.5 ">
              <ol className="flex flex-col gap-1 p-1.5 ">
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Blog
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    blog list left sidebar
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    blog list right sidebar
                  </Link>
                </li>
                <li className="px-2 py-1.5 ">
                  <Link
                    className="text-md font-semibold capitalize"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    blog details
                  </Link>
                </li>
              </ol>
            </div>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={() => {
                setMobileMenuOpen(false);
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* mobile footer contact/sign */}
        {mobileMenuOpen && (
          <div className="mobile-menu-footer mt-6 w-full p-4 bg-(--white-color) shadow rounded-lg">
            <div className="flex items-center gap-2 text-(--main-color)">
              <IoIosCall className="text-xl" />
              <span>02345697871</span>
            </div>
            <div className="flex items-center gap-2 text-(--main-color) mt-2">
              <IoIosMail className="text-xl" />
              <span>02345697871</span>
            </div>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/login");
                }}
                className="flex-1 bg-(--main-color) text-(--white-color) px-4 py-2 rounded"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/register");
                }}
                className="flex-1 bg-(--main-color) text-(--white-color) px-4 py-2 rounded"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}

        <p>
          Delivery: <span> 258 FKD Street, Berlin </span>
        </p>
      </div>
    </nav>
  );
}
