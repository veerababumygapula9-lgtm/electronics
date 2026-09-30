import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-5 sm:py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Link
            to="/"
            className="text-2xl font-black tracking-tight text-indigo-400"
          >
            SONIQ
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
            Premium consumer electronics designed for modern everyday life.
          </p>

          <div className="mt-6 flex gap-3">
            <a
              href="#"
              className="rounded-full border border-gray-700 p-2.5 transition hover:border-indigo-500 hover:text-indigo-400"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-gray-700 p-2.5 transition hover:border-indigo-500 hover:text-indigo-400"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-gray-700 p-2.5 transition hover:border-indigo-500 hover:text-indigo-400"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>

            <a
              href="#"
              className="rounded-full border border-gray-700 p-2.5 transition hover:border-indigo-500 hover:text-indigo-400"
              aria-label="YouTube"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">
            Company
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
            <Link className="transition hover:text-white" to="/about">
              About Us
            </Link>

            <Link className="transition hover:text-white" to="/contact">
              Contact Us
            </Link>

            <Link className="transition hover:text-white" to="/products">
              Products
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">
            Support
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-gray-400">
            <Link className="transition hover:text-white" to="/contact">
              Help Center
            </Link>

            <Link className="transition hover:text-white" to="/contact">
              Shipping
            </Link>

            <Link className="transition hover:text-white" to="/contact">
              Returns
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider">
            Newsletter
          </h3>

          <p className="mt-5 text-sm leading-6 text-gray-400">
            Get product updates and exclusive offers.
          </p>

          <form className="mt-5 flex">
            <input
              type="email"
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-l-xl border border-gray-700 bg-gray-900 px-4 py-3 text-sm outline-none placeholder:text-gray-500 focus:border-indigo-500"
            />

            <button
              type="submit"
              className="rounded-r-xl bg-indigo-600 px-4 text-sm font-bold transition hover:bg-indigo-700"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 SONIQ. All rights reserved.</p>
          <p>Designed for modern living.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;