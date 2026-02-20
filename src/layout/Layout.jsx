/**
 * App shell: NavBar, main content (Outlet), Footer.
 * Syncs authenticated user to cart/wishlist Zustand stores so data is per-user.
 */
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar/NavBar";
import Footer from "../common/Footer/Footer";
import GlobalLoadingIndicator from "../components/ui/GlobalLoadingIndicator";
import useUser from "../hooks/useUser";
import { useCartStore } from "../store/cartStore";
import { useWishlistStore } from "../store/wishlistStore";
export default function Layout() {
  const user = useUser();

  // When user logs in/out, load that user's cart/wishlist from localStorage.
  useEffect(() => {
    const uid = user?.uid ?? null;
    useCartStore.getState().setCurrentUser(uid);
    useWishlistStore.getState().setCurrentUser(uid);
  }, [user?.uid]);

  return (
    <div className="min-h-screen flex flex-col">
      <GlobalLoadingIndicator />
      <NavBar />
      <main className="min-h-max">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
