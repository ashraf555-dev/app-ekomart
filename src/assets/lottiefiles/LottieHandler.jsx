/**
 * Lottie-based loading and error states for route Suspense/errorElement.
 * status: "loadingWebsite" | "loadingHello" | "error"
 */
import { useLottie } from "lottie-react";
import loadingWebsite from "./Sandy Loading.json";
import err from "./404 Page Not Found.json";
import loadingHello from "./Welcome Animation.json";
import { Link } from "react-router-dom";

export default function LottieHandler({ status }) {
  const Option = {
    animationData:
      status === "loadingWebsite"
        ? loadingWebsite
        : status === "error"
          ? err
          : status === "loadingHello"
            ? loadingHello
            : null,
  };

  const { View } = useLottie(Option);

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full h-1/2 flex  items-center justify-center ">
        <div className="w-1/2">{View}</div>
        {status === "loadingWebsite" ? (
          <p className="text-(--main-color) text-2xl capitalize ">
            loading webSite
          </p>
        ) : status === "loadingHello" ? (
          <p className="text-(--main-color) text-2xl capitalize ">
            loading section
          </p>
        ) : status === "error" ? (
          <Link className=" capitalize text-lg bg-(--white-color) border border-black rounded-lg p-3 text-(--main-color) hover:bg-(--main-color) hover:text-(--white-color) hover:border-none duration-500 ">
            go to home
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
