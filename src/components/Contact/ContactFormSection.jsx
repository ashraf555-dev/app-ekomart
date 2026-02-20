/**
 * Contact form section — Name, Email, Subject, Message.
 * Validation for required fields. Matches original styling.
 * [IMAGE PLACEHOLDER] — Background image for form section.
 */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import img from "../../assets/imagesAbout/img.jpg";
const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(1, "Message is required"),
});

export default function ContactFormSection() {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = () => {
    setSubmitSuccess(true);
  };

  return (
    <section className="relative bg-gray-100 px-4 sm:px-6 lg:px-24 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 flex items-center justify-between flex-wrap">
        <div className="w-150 max-w-2xl flex flex-col justify-center gap-8">
          <h2 className="text-xl sm:text-xl font-bold text-(--secondary-color)">
            Fill Up The Form If You Have Any Question
          </h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6  p-6 rounded-xl"
          >
            <div>
              <input
                {...register("name")}
                type="text"
                placeholder="Name *"
                aria-label="Name"
                className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-(--main-color) focus:border-transparent transition"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("email")}
                type="email"
                placeholder="Email *"
                aria-label="Email"
                className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-(--main-color) focus:border-transparent transition"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("subject")}
                type="text"
                placeholder="Subject *"
                aria-label="Subject"
                className="w-full h-12 px-4 rounded-lg border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-(--main-color) focus:border-transparent transition"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.subject.message}
                </p>
              )}
            </div>
            <div>
              <textarea
                {...register("message")}
                placeholder="Message *"
                aria-label="Message"
                rows={5}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white outline-none focus:ring-2 focus:ring-(--main-color) focus:border-transparent transition resize-none"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="h-12 px-8 rounded-lg bg-(--main-color) text-white font-semibold hover:bg-(--secondary-color) focus:outline-none focus:ring-2 focus:ring-(--main-color) focus:ring-offset-2 transition w-fit"
            >
              Send Message
            </button>
            {submitSuccess && (
              <p className="text-(--main-color) font-medium" role="status">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
        <div className="h-125 w-max sm:w-1/2 rounded-2xl overflow-hidden ">
          <img
            src={img}
            alt=""
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
