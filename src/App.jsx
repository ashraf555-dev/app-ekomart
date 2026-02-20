/**
 * Root router for EkoMart.
 * Defines all routes with lazy-loaded pages and Layout wrapper.
 * Suspense fallbacks use Lottie animations for loading/error states.
 */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import LottieHandler from "./assets/lottiefiles/LottieHandler";

// Lazy-loaded route components
const Layout = lazy(() => import("./layout/Layout"));
const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About/About"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Login = lazy(() => import("./pages/Pages/Login"));
const Register = lazy(() => import("./pages/Pages/Register"));

/** Fallback for layout (initial app load) */
const LayoutFallback = <LottieHandler status="loadingWebsite" />;
/** Fallback for page-level route changes */
const PageFallback = <LottieHandler status="loadingHello" />;
/** Error boundary for route errors */
const ErrorElement = <LottieHandler status="error" />;

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={LayoutFallback}>
        <Layout />
      </Suspense>
    ),
    children: [
      { index: true, element: <Suspense fallback={PageFallback}><Home /></Suspense> },
      { path: "about", element: <Suspense fallback={PageFallback}><About /></Suspense> },
      { path: "shop", element: <Suspense fallback={PageFallback}><Shop /></Suspense> },
      { path: "cart", element: <Suspense fallback={PageFallback}><Cart /></Suspense> },
      { path: "wishlist", element: <Suspense fallback={PageFallback}><Wishlist /></Suspense> },
      { path: "contact", element: <Suspense fallback={PageFallback}><Contact /></Suspense> },
      { path: "register", element: <Suspense fallback={PageFallback}><Register /></Suspense> },
      { path: "login", element: <Suspense fallback={PageFallback}><Login /></Suspense> },
    ],
    errorElement: ErrorElement,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
