import { Link } from "react-router-dom";
import { ArrowRight, Award, Heart, Sparkles, Users } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  return (
    <main>
      <section className="bg-gray-950 py-16 text-white sm:py-24">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-400">
            About SONIQ
          </p>

          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-6xl">
            Technology that fits your life.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-gray-400">
            We create thoughtfully designed consumer electronics that combine
            modern technology, dependable performance and effortless style.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-20 dark:bg-gray-950">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              Our story
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Built around the way people live.
            </h2>
          </motion.div>

          <div className="space-y-6 text-gray-600 dark:text-gray-400">
            <p className="leading-8">
              SONIQ was created with a simple idea: great technology should
              feel natural, useful and exciting at the same time.
            </p>

            <p className="leading-8">
              From smartwatches and wireless audio to everyday accessories,
              every product is designed to bring useful technology into
              everyday moments.
            </p>

            <p className="leading-8">
              We focus on thoughtful design, dependable performance and an
              experience that keeps technology simple.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              [Sparkles, "Innovation", "Modern technology with practical features."],
              [Heart, "Customer First", "Products designed around everyday needs."],
              [Award, "Quality", "Focused on dependable products and experiences."],
              [Users, "Community", "Building technology people enjoy using."],
            ].map(([Icon, title, description]) => (
              <div
                key={title}
                className="rounded-3xl border border-gray-200 bg-white p-5 sm:p-7 dark:border-gray-800 dark:bg-gray-950"
              >
                <Icon className="text-indigo-600" size={28} />

                <h3 className="mt-6 text-lg font-bold">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 text-center lg:flex-row lg:px-8 lg:text-left">
          <div>
            <h2 className="text-3xl font-black">
              Ready to discover SONIQ?
            </h2>
            <p className="mt-2 text-indigo-100">
              Explore our latest technology collection.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-indigo-600"
          >
            Shop Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default About;