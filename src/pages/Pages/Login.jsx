/**
 * Login page. Email/password form with Firebase auth.
 * Shows promo info strip at bottom (shared with Register, Shop).
 */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import TextField from "@mui/material/TextField";

import { auth } from "../../../firebase/firebase";
import {
  showLoadingAlert,
  showSuccessAlert,
  showErrorAlert,
} from "../../common/NavBar/alerts";
import InfoStripSection from "../../components/ui/InfoStripSection";
import { INFO_STRIP_ITEMS } from "../../data/infoStripData";

import logoIcon from "../../assets/images/fav.png";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      showLoadingAlert( " sign in successfully " );
      await signInWithEmailAndPassword(auth, form.email, form.password);
      showSuccessAlert( "login successful" , () => navigate("/"));
    } catch (err) {
      const message = err.message.replace("Firebase:", "").trim();
      setError(message);
      showErrorAlert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-20 items-center justify-center pt-16">
      <div className="w-full max-w-md sm:max-w-lg bg-white shadow-lg border border-gray-200 rounded-2xl p-6 sm:p-10 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={logoIcon} alt="logo" className="w-16 h-16" />
          <h1 className="text-xl sm:text-2xl font-semibold">
            Login to Your Account
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <TextField
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={form.email}
            onChange={handleChange}
            disabled={loading}
            required
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={form.password}
            onChange={handleChange}
            disabled={loading}
            required
          />
          {error && (
            <div className="text-red-600 text-sm font-medium">{error}</div>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-(--main-color) disabled:bg-gray-500 disabled:cursor-not-allowed text-white text-lg cursor-pointer py-3 rounded-lg font-medium hover:not-disabled:opacity-90 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-sm sm:text-base font-medium text-center">
          Don&apos;t have an account?
          <Link
            to="/register"
            className="ml-1 text-(--secondary-color) font-semibold hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>

      <InfoStripSection items={INFO_STRIP_ITEMS} />
    </div>
  );
}
