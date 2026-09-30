import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { useApp } from "../context/AppContext";

function Cart() {
  const {
    cart,
    cartCount,
    cartTotal,
    updateCartQuantity,
    removeFromCart,
  } = useApp();

  const shipping = cartTotal >= 999 || cartTotal === 0 ? 0 : 99;
  const total = cartTotal + shipping;

  if (cart.length === 0) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-5 dark:bg-gray-950">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950">
            <ShoppingBag size={34} />
          </div>

          <h1 className="mt-6 text-3xl font-black">
            Your cart is empty
          </h1>

          <p className="mt-3 text-gray-500">
            Add some products to your cart and they will appear here.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-block rounded-xl bg-indigo-600 px-7 py-3.5 font-bold text-white transition hover:bg-indigo-700"
          >
            Start Shopping
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-8 sm:py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-8">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            Shopping Bag
          </p>

          <h1 className="mt-2 text-3xl font-black sm:text-4xl">
            Your Cart
          </h1>

          <p className="mt-2 text-gray-500">
            {cartCount} items in your cart
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:gap-8 lg:grid-cols-[1fr_380px]">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-3xl border border-gray-200 bg-white p-4 sm:flex-row sm:p-5 dark:border-gray-800 dark:bg-gray-900"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 w-full rounded-2xl object-cover sm:h-40 sm:w-40"
                />

                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                        {item.category}
                      </p>

                      <h2 className="mt-1 text-xl font-bold">
                        {item.name}
                      </h2>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-lg p-2 text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                      aria-label="Remove product"
                    >
                      <Trash2 size={19} />
                    </button>
                  </div>

                  <div className="mt-auto flex flex-col justify-between gap-4 pt-6 sm:flex-row sm:items-end">
                    <div className="inline-flex w-fit items-center rounded-xl border border-gray-200 dark:border-gray-700">
                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(
                            item.id,
                            item.quantity - 1
                          )
                        }
                        className="p-2.5"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="min-w-10 text-center text-sm font-bold">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          updateCartQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                        className="p-2.5"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <p className="text-xl font-black">
                      ₹
                      {(
                        item.price * item.quantity
                      ).toLocaleString("en-IN")}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="h-fit rounded-3xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900">
            <h2 className="text-xl font-black">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">
                  Subtotal
                </span>
                <span className="font-semibold">
                  ₹{cartTotal.toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">
                  Shipping
                </span>
                <span className="font-semibold">
                  {shipping === 0
                    ? "FREE"
                    : `₹${shipping}`}
                </span>
              </div>

              <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
                <div className="flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="text-xl font-black">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-7 w-full rounded-xl bg-indigo-600 px-5 py-4 font-bold text-white transition hover:bg-indigo-700"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/products"
              className="mt-4 block text-center text-sm font-semibold text-indigo-600"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cart;