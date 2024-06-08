import React from 'react';
import { Button } from "flowbite-react";

const Order = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <section className="rounded-3xl shadow-2xl bg-white p-8 sm:p-12 text-center max-w-md mx-auto">
        <p className="text-sm font-semibold tracking-widest text-pink-500">
          Your order is being confirmed.
        </p>

        <h2 className="mt-6 text-2xl font-bold text-gray-800">
          Thanks for your purchase, we're getting it ready!
        </h2>

        <Button
          className="mt-8 w-full rounded-full bg-pink-600 py-4 font-bold text-white shadow-xl hover:bg-pink-700 transition-colors"
          href="#"
        >
          Pay Now
        </Button>
      </section>
    </div>
  );
}

export default Order;
