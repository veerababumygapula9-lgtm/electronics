import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

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

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!form.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) {
      toast.error("Please fix the form errors");
      return;
    }

    toast.success("Message sent successfully");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-10 sm:py-14 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">
            Get in touch
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Contact us
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Have a question about our products or your order? Send us a
            message and our team will get back to you.
          </p>
        </div>

        <div className="mt-9 grid gap-6 md:gap-8 lg:grid-cols-[380px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-3xl bg-gray-950 p-6 text-white sm:p-8"
          >
            <h2 className="text-2xl font-black">
              Let's talk
            </h2>

            <p className="mt-3 leading-7 text-gray-400">
              Our support team is available to help with product and order
              questions.
            </p>

            <div className="mt-10 space-y-7">
              <div className="flex gap-4">
                <div className="rounded-xl bg-indigo-600 p-3">
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="mt-1 font-semibold">
                    support@soniq.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-indigo-600 p-3">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="mt-1 font-semibold">
                    +91 1800 123 4567
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="rounded-xl bg-indigo-600 p-3">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="mt-1 font-semibold">
                    Bengaluru, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-semibold"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-xl border px-4 py-3.5 outline-none transition focus:border-indigo-500 ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-200 dark:border-gray-700"
                  } bg-gray-50 dark:bg-gray-800`}
                  placeholder="Your name"
                />

                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-semibold"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-2 w-full rounded-xl border px-4 py-3.5 outline-none transition focus:border-indigo-500 ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-200 dark:border-gray-700"
                  } bg-gray-50 dark:bg-gray-800`}
                  placeholder="you@example.com"
                />

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label
                htmlFor="subject"
                className="text-sm font-semibold"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className={`mt-2 w-full rounded-xl border px-4 py-3.5 outline-none transition focus:border-indigo-500 ${
                  errors.subject
                    ? "border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                } bg-gray-50 dark:bg-gray-800`}
                placeholder="How can we help?"
              />

              {errors.subject && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label
                htmlFor="message"
                className="text-sm font-semibold"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="6"
                className={`mt-2 w-full resize-none rounded-xl border px-4 py-3.5 outline-none transition focus:border-indigo-500 ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-200 dark:border-gray-700"
                } bg-gray-50 dark:bg-gray-800`}
                placeholder="Write your message..."
              />

              {errors.message && (
                <p className="mt-1 text-xs text-red-500">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 font-bold text-white transition hover:bg-indigo-700"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </main>
  );
}

export default Contact;