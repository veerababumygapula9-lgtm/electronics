import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  Heart,
  Moon,
  Sun,
} from "lucide-react";
import { useApp } from "../context/AppContext";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { cart, wishlist } = useApp();
  const { dark, setDark } = useTheme();

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur dark:border-gray-800 dark:bg-gray-950/95">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-5 lg:px-8">
        <Link
          to="/"
          className="text-xl font-black tracking-tight text-indigo-600 sm:text-2xl"
        >
          SONIQ
        </Link>

        <nav className="hidden items-center gap-5 lg:flex xl:gap-7">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-semibold transition ${
                  isActive
                    ? "text-indigo-600"
                    : "text-gray-700 hover:text-indigo-600 dark:text-gray-200"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={() => setDark(!dark)}
            className="rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            to="/products"
            className="relative rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Wishlist"
          >
            <Heart size={20} />

            {wishlist.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-bold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>

          <Link
            to="/cart"
            className="relative rounded-full p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Cart"
          >
            <ShoppingCart size={20} />

            {cart.length > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-bold text-white">
                {cart.length}
              </span>
            )}
          </Link>

          <Link
            to="/login"
            className="rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
          >
            Login
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white px-5 py-5 dark:border-gray-800 dark:bg-gray-950 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-950"
                      : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <div className="flex items-center gap-3 border-t border-gray-200 pt-4 dark:border-gray-800">
              <button
                type="button"
                onClick={() => setDark(!dark)}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 py-3 text-sm font-semibold dark:border-gray-700"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
                {dark ? "Light Mode" : "Dark Mode"}
              </button>

              <Link
                to="/cart"
                onClick={() => setOpen(false)}
                className="relative rounded-xl border border-gray-200 p-3 dark:border-gray-700"
              >
                <ShoppingCart size={20} />

                {cart.length > 0 && (
                  <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-bold text-white">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="rounded-xl bg-indigo-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;