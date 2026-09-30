import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    if (sort === "low") {
      result = [...result].sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "high") {
      result = [...result].sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "rating") {
      result = [...result].sort(
        (a, b) => b.rating - a.rating
      );
    }

    return result;
  }, [search, category, sort]);

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setSort("featured");
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8 sm:py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-indigo-600">
            Collection
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
            Explore our products
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Discover smart technology, premium audio and accessories built
            for your everyday lifestyle.
          </p>
        </div>

        <div className="mt-8 rounded-2xl sm:mt-10 sm:rounded-3xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto]">
            <div className="relative">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="search"
                value={search}
                onChange={(event) =>
                  setSearch(event.target.value)
                }
                placeholder="Search products..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 outline-none transition focus:border-indigo-500 dark:border-gray-700 dark:bg-gray-800"
              />
            </div>

            <div className="flex min-w-0 items-center gap-2">
              <SlidersHorizontal
                size={18}
                className="text-gray-500"
              />

              <select
                value={category}
                onChange={(event) =>
                  setCategory(event.target.value)
                }
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none dark:border-gray-700 dark:bg-gray-800"
              >
                {categories.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <select
              value={sort}
              onChange={(event) => setSort(event.target.value)}
              className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none dark:border-gray-700 dark:bg-gray-800"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>

          {(search || category !== "All" || sort !== "featured") && (
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600"
            >
              <X size={16} />
              Clear filters
            </button>
          )}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-500">
            {filteredProducts.length} products
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="mt-5 grid gap-4 sm:mt-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="mt-8 rounded-2xl sm:mt-10 sm:rounded-3xl border border-dashed border-gray-300 bg-white py-20 text-center dark:border-gray-700 dark:bg-gray-900">
            <h2 className="text-xl font-bold">
              No products found
            </h2>
            <p className="mt-2 text-gray-500">
              Try changing your search or filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}

export default Products;