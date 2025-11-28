import { useState } from "react";
import { NavLink } from "react-router-dom";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  phone: string | undefined;
  message: string;
  agree: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  agree?: string;
}

export default function Form() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    agree: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.company.trim()) newErrors.company = "Company required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email required";
    if (!formData.phone || !isValidPhoneNumber(formData.phone))
      newErrors.phone = "Valid phone required";
    if (!formData.message.trim()) newErrors.message = "Message required";
    if (!formData.agree) newErrors.agree = "You must agree to continue";

    return newErrors;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the errors and try again.");
      return;
    }

    setErrors({});

    try {
      const response = await fetch("https://localhost:5000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        setErrors(result.errors || {});
        toast.error(result.error || "Server validation failed.");
      } else {
        toast.success(result.message);
        setFormData({
          firstName: "",
          lastName: "",
          company: "",
          email: "",
          phone: "",
          message: "",
          agree: false,
        });
      }
    } catch (error) {
      toast.error("Failed to submit. Network/server error.");
    }
  };

  return (
    <div className="isolate bg-white px-6 pt-0 pb-24 sm:py-32 lg:px-8 relative">
      {/* Header */}
      <div className="relative text-center py-20 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-[#5227FF] via-[#1C72E3] to-[#190566] opacity-30 blur-3xl animate-pulse" />
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          Let's Build Something Great Together
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Tell us about your web, mobile, design, or marketing project. Our team
          is ready to collaborate.
        </p>
      </div>

      {/* Back button */}
      <div className="absolute top-6 left-6">
        <NavLink
          to="/"
          className="group inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800 transition-all"
        >
          <svg
            className="mr-1 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back
        </NavLink>
      </div>

      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* FIRST NAME */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                type="text"
                placeholder="Jane"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {errors.firstName && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.firstName}
                </p>
              )}
            </div>
          </div>

          {/* LAST NAME */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {errors.lastName && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.lastName}
                </p>
              )}
            </div>
          </div>

          {/* COMPANY */}
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Company or Startup Name
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                type="text"
                placeholder="Acme Corp"
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {errors.company && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.company}
                </p>
              )}
            </div>
          </div>

          {/* EMAIL */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Business Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* PHONE */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <PhoneInput
                international
                defaultCountry="US"
                value={formData.phone}
                onChange={(value) =>
                  setFormData({ ...formData, phone: value ?? "" })
                }
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {errors.phone && (
                <p className="text-sm text-red-600 mt-1">{errors.phone}</p>
              )}
            </div>
          </div>

          {/* MESSAGE */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Tell us about your project
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                placeholder="What services do you need? Web dev, mobile app, branding, SEO, etc."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {errors.message && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.message}
                </p>
              )}
            </div>
          </div>

          {/* AGREEMENT */}
          <div className="flex gap-x-4 sm:col-span-2">
            <input
              id="agree-to-policies"
              type="checkbox"
              checked={formData.agree}
              onChange={(e) =>
                setFormData({ ...formData, agree: e.target.checked })
              }
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
            />
            <label
              htmlFor="agree-to-policies"
              className="text-sm text-gray-600"
            >
              By submitting, you agree to our{" "}
              <a href="#" className="font-semibold text-blue-600">
                privacy policy
              </a>
              .
            </label>
          </div>

          {errors.agree && (
            <p className="text-sm text-red-600 sm:col-span-2">
              {errors.agree}
            </p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Let's talk
          </button>
        </div>
      </form>

      <ToastContainer position="top-center" />
    </div>
  );
}
