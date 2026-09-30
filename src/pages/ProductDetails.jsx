import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { products } from "../data/products";
import { useApp } from "../context/AppContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart, wishlist, toggleWishlist } = useApp();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(
    product?.colors?.[0] || ""
  );

  if (!product) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-5 dark:bg-gray-950">
        <div className="text-center">
          <h1 className="text-3xl font-black">
            Product not found
          </h1>

          <p className="mt-3 text-gray-500">
            The product you're looking for doesn't exist.
          </p>

          <Link
            to="/products"
            className="mt-6 inline-block rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white"
          >
            Back to Products
          </Link>
        </div>
      </main>
    );
  }

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  const nextImage = () => {
    setActiveImage(
      (current) =>
        (current + 1) % product.images.length
    );
  };

  const previousImage = () => {
    setActiveImage(
      (current) =>
        (current - 1 + product.images.length) %
        product.images.length
    );
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i += 1) {
      addToCart(product);
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-5 sm:py-10 lg:px-8 lg:py-16">
        <div className="mb-6 overflow-hidden text-ellipsis whitespace-nowrap text-sm sm:mb-8 text-gray-500">
          <Link
            to="/products"
            className="transition hover:text-indigo-600"
          >
            Products
          </Link>

          <span className="mx-2">/</span>

          <span>{product.name}</span>
        </div>

        <div className="grid gap-8 md:gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-900">
              <img
                src={product.images[activeImage]}
                alt={product.name}
                className="h-[320px] w-full object-cover sm:h-[450px] lg:h-[600px]"
              />

              <button
                type="button"
                onClick={previousImage}
                className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:scale-105 dark:bg-gray-900/90"
                aria-label="Previous image"
              >
                <ChevronLeft size={22} />
              </button>

              <button
                type="button"
                onClick={nextImage}
                className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-md transition hover:scale-105 dark:bg-gray-900/90"
                aria-label="Next image"
              >
                <ChevronRight size={22} />
              </button>

              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md dark:bg-gray-900"
                aria-label="Toggle wishlist"
              >
                <Heart
                  size={21}
                  className={
                    isWishlisted
                      ? "fill-red-500 text-red-500"
                      : "text-gray-700 dark:text-gray-200"
                  }
                />
              </button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  type="button"
                  key={image}
                  onClick={() => setActiveImage(index)}
                  className={`overflow-hidden rounded-2xl border-2 transition ${
                    activeImage === index
                      ? "border-indigo-600"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="h-20 w-full object-cover sm:h-28"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              {product.category}
            </p>

            <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1.5 text-sm font-bold text-yellow-700">
                <Star
                  size={16}
                  className="fill-yellow-400 text-yellow-400"
                />
                {product.rating}
              </div>

              <span className="text-sm text-gray-500">
                {product.reviews} reviews
              </span>
            </div>

            <div className="mt-7 flex items-center gap-4">
              <span className="text-3xl font-black sm:text-4xl">
                ₹{product.price.toLocaleString("en-IN")}
              </span>

              <span className="text-base text-gray-400 sm:text-xl line-through">
                ₹{product.oldPrice.toLocaleString("en-IN")}
              </span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-bold text-green-700">
                {Math.round(
                  ((product.oldPrice - product.price) /
                    product.oldPrice) *
                    100
                )}
                % OFF
              </span>
            </div>

            <p className="mt-7 text-base leading-8 text-gray-600 dark:text-gray-400">
              {product.description}
            </p>

            <div className="mt-8">
              <h3 className="font-bold">Choose Color</h3>

              <div className="mt-3 flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    type="button"
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`rounded-xl border px-5 py-2.5 text-sm font-semibold transition ${
                      selectedColor === color
                        ? "border-indigo-600 bg-indigo-50 text-indigo-600 dark:bg-indigo-950"
                        : "border-gray-200 dark:border-gray-700"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-bold">Quantity</h3>

              <div className="mt-3 inline-flex items-center rounded-xl border border-gray-200 dark:border-gray-700">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.max(1, current - 1)
                    )
                  }
                  className="p-3 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Minus size={18} />
                </button>

                <span className="min-w-12 text-center font-bold">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => current + 1)
                  }
                  className="p-3 transition hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Plus size={18} />
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={handleAddToCart}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-bold text-white transition hover:bg-indigo-700"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <button
                type="button"
                onClick={() => toggleWishlist(product)}
                className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-6 py-4 font-bold transition hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <Heart
                  size={20}
                  className={
                    isWishlisted
                      ? "fill-red-500 text-red-500"
                      : ""
                  }
                />
                Wishlist
              </button>
            </div>

            <div className="mt-10 grid gap-4 border-t border-gray-200 pt-8 dark:border-gray-800 sm:grid-cols-2">
              <div className="flex gap-3">
                <Truck
                  size={22}
                  className="shrink-0 text-indigo-600"
                />
                <div>
                  <h4 className="font-bold">Free Delivery</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Free delivery on orders above ₹999
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldCheck
                  size={22}
                  className="shrink-0 text-indigo-600"
                />
                <div>
                  <h4 className="font-bold">Warranty</h4>
                  <p className="mt-1 text-sm text-gray-500">
                    1 year product warranty included
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl sm:mt-10 bg-gray-50 p-5 sm:p-6 dark:bg-gray-900">
              <h3 className="text-lg font-bold">
                Product Features
              </h3>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
                  >
                    <span className="h-2 w-2 rounded-full bg-indigo-600" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetails;