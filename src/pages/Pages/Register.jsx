/**
 * Register page. Form with react-hook-form + Zod validation.
 * Auth handled by Zustand AuthSlice. Shows promo info strip at bottom.
 */
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "@mui/material/TextField";

import { LiaFacebookF } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";

import logoIcon from "../../assets/images/fav.png";
import registerSchema from "../../validation/registerValidation";
import useAuth from "../../zustand/AuthSlice";
import InfoStripSection from "../../components/ui/InfoStripSection";
import { INFO_STRIP_ITEMS } from "../../data/infoStripData";

export default function Register() {
  const registerHandler = useAuth((s) => s.registerHandler);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(registerSchema),
    mode: "all",
  });

  const onSubmit = (data) => registerHandler(data);

  return (
    <div className="min-h-screen flex flex-col gap-20 items-center justify-center pt-16">
      <div className="w-full max-w-md sm:max-w-lg bg-white shadow-lg border border-gray-200 rounded-2xl p-6 sm:p-10 flex flex-col gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={logoIcon} alt="logo" className="w-16 h-16" />
          <h1 className="text-xl sm:text-2xl font-semibold">
            Register Into Your Account
          </h1>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <TextField
            {...register("userName")}
            label="User name"
            variant="outlined"
            fullWidth
            error={!!errors.userName}
            helperText={errors.userName?.message}
            id="userName"
          />
          <TextField
            {...register("email")}
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            error={!!errors.email}
            helperText={errors.email?.message}
            id="email"
          />
          <TextField
            {...register("password")}
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            error={!!errors.password}
            helperText={errors.password?.message}
            id="password"
          />

          <button
            disabled={!isDirty || !isValid}
            className="bg-(--main-color) disabled:bg-gray-500 disabled:cursor-not-allowed text-white text-lg cursor-pointer py-3 rounded-lg font-medium hover:not-disabled:opacity-90 transition"
          >
            Register Account
          </button>
        </form>

        <div className="flex flex-col gap-6 items-center">
          <div className="flex items-center w-full gap-3 text-sm font-medium">
            <span className="flex-1 h-px bg-gray-300"></span>
            or register with
            <span className="flex-1 h-px bg-gray-300"></span>
          </div>

          <div className="flex flex-col sm:flex-row w-full gap-4">
            <button
              type="button"
              className="flex-1 border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 text-base hover:bg-gray-50 transition cursor-pointer"
            >
              <FcGoogle className="text-xl" />
              Google
            </button>

            <button
              type="button"
              className="flex-1 border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-2 text-base hover:bg-gray-50 transition cursor-pointer"
            >
              <LiaFacebookF className="text-xl text-blue-700" />
              Facebook
            </button>
          </div>

          <p className="text-sm sm:text-base font-medium text-center">
            Already have an account?
            <Link
              to="/login"
              className="ml-1 text-(--secondary-color) font-semibold hover:underline"
            >
              Login Now
            </Link>
          </p>
        </div>
      </div>

      {/* Register uses empty container padding to match original layout */}
      <InfoStripSection items={INFO_STRIP_ITEMS} containerClassName="" />
    </div>
  );
}
