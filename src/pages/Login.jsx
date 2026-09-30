import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      toast.error("Please enter valid login details");
      return;
    }

    localStorage.setItem("soniqUser", form.email);

    toast.success("Login successful");

    navigate("/");
  };

  return (
    <main className="flex min-h-[calc(100vh-80px)] items-center justify-center bg-gray-50 px-4 py-8 sm:px-5 sm:py-12 dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-9 dark:border-gray-800 dark:bg-gray-900"
      >
        <div className="text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-950">
            <LockKeyhole size={25} />
          </div>

          <h1 className="mt-5 text-2xl font-black sm:text-3xl">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue to your SONIQ account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <div>
            <label
              htmlFor="email"
              className="text-sm font-semibold"
            >
              Email Address
            </label>

            <div className="relative mt-2">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className={`w-full rounded-xl border py-3.5 pl-11 pr-4 outline-none transition focus:border-indigo-500 ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                } bg-gray-50 dark:bg-gray-800`}
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mt-5">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-semibold"
              >
                Password
              </label>

              <button
                type="button"
                className="text-xs font-semibold text-indigo-600"
              >
                Forgot password?
              </button>
            </div>

            <div className="relative mt-2">
              <LockKeyhole
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full rounded-xl border py-3.5 pl-11 pr-12 outline-none transition focus:border-indigo-500 ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                } bg-gray-50 dark:bg-gray-800`}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((current) => !current)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                aria-label="Toggle password visibility"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-7 w-full rounded-xl bg-indigo-600 px-5 py-3.5 font-bold text-white transition hover:bg-indigo-700"
          >
            Sign In
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-bold text-indigo-600"
          >
            Create one
          </Link>
        </p>
      </motion.div>
    </main>
  );
}

export default Login;