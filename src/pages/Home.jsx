import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Truck, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <main className="overflow-hidden">
      <section className="bg-gray-950 text-white">
        <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-10 px-4 py-12 sm:px-5 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.3em] text-indigo-400">
              Technology for life
            </p>

            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Sound.
              <br />
              Style.
              <br />
              <span className="text-indigo-500">Smarter.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 sm:mt-6 sm:text-lg sm:leading-8 text-gray-400">
              Discover premium audio, smartwatches and everyday technology
              designed to make every moment better.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-7 py-4 font-bold transition hover:bg-indigo-700"
              >
                Shop Products
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center rounded-full border border-gray-700 px-7 py-4 font-bold transition hover:bg-white hover:text-gray-950"
              >
                Discover SONIQ
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-indigo-600/20 blur-3xl" />

            <img
              src={products[0].image}
              alt={products[0].name}
              className="relative mx-auto h-[300px] w-full max-w-[560px] rounded-[28px] object-cover shadow-2xl sm:h-[420px] sm:rounded-[36px] lg:h-[500px]"
            />

            <div className="absolute bottom-4 left-4 rounded-2xl sm:bottom-6 sm:left-6 border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-sm text-gray-300">Starting from</p>
              <p className="mt-1 text-2xl font-black">₹2,999</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-5 sm:py-10 sm:grid-cols-3 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-indigo-50 p-4 text-indigo-600 dark:bg-indigo-950">
              <Truck size={25} />
            </div>
            <div>
              <h3 className="font-bold">Free Shipping</h3>
              <p className="text-sm text-gray-500">
                On orders above ₹999
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-indigo-50 p-4 text-indigo-600 dark:bg-indigo-950">
              <ShieldCheck size={25} />
            </div>
            <div>
              <h3 className="font-bold">1 Year Warranty</h3>
              <p className="text-sm text-gray-500">
                Complete product protection
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-indigo-50 p-4 text-indigo-600 dark:bg-indigo-950">
              <Headphones size={25} />
            </div>
            <div>
              <h3 className="font-bold">Expert Support</h3>
              <p className="text-sm text-gray-500">
                We're here when you need us
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-14 sm:py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
                Featured
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight sm:text-4xl">
                Best sellers
              </h2>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-bold text-indigo-600"
            >
              View all
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-16 text-center lg:flex-row lg:px-8 lg:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-200">
              New generation
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Upgrade your everyday technology.
            </h2>
          </div>

          <Link
            to="/products"
            className="rounded-full bg-white px-7 py-4 font-bold text-indigo-600 transition hover:bg-gray-100"
          >
            Explore Collection
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;