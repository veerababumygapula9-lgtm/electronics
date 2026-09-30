import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useApp } from "../context/AppContext";

function ProductCard({ product }) {
  const { wishlist, toggleWishlist, addToCart } = useApp();

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  return (
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <Link to={`/products/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-56 w-full object-cover sm:h-64 lg:h-72 transition duration-500 group-hover:scale-105"
          />
        </Link>

        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105 dark:bg-gray-900"
          aria-label="Toggle wishlist"
        >
          <Heart
            size={19}
            className={
              isWishlisted
                ? "fill-red-500 text-red-500"
                : "text-gray-700 dark:text-gray-200"
            }
          />
        </button>
      </div>

      <div className="p-4 sm:p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {product.category}
        </p>

        <Link to={`/products/${product.id}`}>
          <h3 className="line-clamp-1 text-base font-bold sm:text-lg text-gray-900 transition hover:text-indigo-600 dark:text-white">
            {product.name}
          </h3>
        </Link>

        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-yellow-400 text-yellow-400"
            />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              {product.rating}
            </span>
          </div>

          <span className="text-gray-300">•</span>

          <span className="text-sm text-gray-500">
            Premium
          </span>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <div>
            <span className="text-lg font-black sm:text-xl text-gray-900 dark:text-white">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            <span className="ml-2 text-sm text-gray-400 line-through">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => addToCart(product)}
          className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export default ProductCard;