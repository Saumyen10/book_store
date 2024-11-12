// Cart.jsx
import React from "react";

const Cart = () => {
  // Example cart items (you may fetch this data from an API or context)
  const cartItems = [
    { id: 1, name: "Product 1", price: 25.99, quantity: 1 },
    { id: 2, name: "Product 2", price: 15.99, quantity: 2 },
    { id: 3, name: "Product 3", price: 9.99, quantity: 3 },
  ];

  // Calculate the total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Cart Header */}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-gray-700">Your Cart</h1>
        </div>

        {/* Cart Items */}
        <div className="p-6">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 border-b border-gray-200"
              >
                <div className="flex items-center">
                  <div className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </div>
                  <span className="ml-4 text-gray-600">
                    Quantity: {item.quantity}
                  </span>
                </div>
                <div className="text-lg font-semibold text-gray-800">
                  ${item.price * item.quantity}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">
              Your cart is currently empty.
            </div>
          )}
        </div>

        {/* Cart Summary */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800">
              Total Price
            </span>
            <span className="text-lg font-semibold text-gray-800">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
          <button className="w-full mt-6 bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-200">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
