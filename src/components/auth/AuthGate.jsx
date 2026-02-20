/**
 * Prompts unauthenticated users to log in or register.
 * Renders centered message + Login/Register links.
 * Used by Cart and Wishlist when user is not signed in.
 */
import { Link } from "react-router-dom";

export default function AuthGate({ message = "Please log in or create an account to view and manage your cart." }) {
  return (
    <div className="py-16 text-center">
      <p className="text-(--gray-color) text-lg mb-6">{message}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/login"
          className="inline-block rounded-md bg-(--main-color) px-6 py-3 text-sm font-semibold text-(--white-color) hover:bg-(--secondary-color) transition"
        >
          Log in
        </Link>
        <Link
          to="/register"
          className="inline-block rounded-md border-2 border-(--main-color) px-6 py-3 text-sm font-semibold text-(--main-color) hover:bg-(--main-color) hover:text-(--white-color) transition"
        >
          Create account
        </Link>
      </div>
    </div>
  );
}
