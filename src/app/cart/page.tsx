import { useContext } from "react";
import { CartContext } from "../_context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);

  const itemsTotal = cart.reduce((prevValue, currValue) => {
    return prevValue + (currValue.fullPrice * currValue.quantityCount)
  }, 0)

  const itemsDiscount = cart.reduce((prevValue, currValue) => {
    return prevValue + (currValue.savedPrice * currValue.quantityCount)
  }, 0)

  const addItemQuantity = (id) => {
    setCart(prevCart => {
      return prevCart.map(cartItem => {
        return cartItem.id == id ? {
          ...cartItem, quantityCount: cartItem.quantityCount + 1
        } : cartItem
      })
    })
  }

  const subItemQuantity = (id) => {
    setCart(prevCart => {
      const item = prevCart.find(cartItem => cartItem.id === id);
      if (item.quantityCount > 1) {
        return prevCart.map(cartItem => cartItem.id === id ?
          { ...cartItem, quantityCount: cartItem.quantityCount - 1 } : cartItem
        )
      }

      return prevCart.filter(cartItem => cartItem.id !== id)
    })
  }

  const deleteCartItem = (id) => {
    setCart(prevCart => {
      return prevCart.filter(cartItem => cartItem.id !== id)
    })
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 bg-gray-900 text-gray-100 min-h-screen p-4 md:p-8">
      <div className="cart-main bg-gray-800 flex-2 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-2">
          Cart ({cart.length})
        </h2>

        <div className="cart-items space-y-6">
          {cart.map(({ id, thumbnail, title, price, fullPrice,
            quantityCount }) => {
            return (
              <div
                key={id}
                className="cart-item flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border border-gray-700 rounded-xl hover:bg-gray-750 transition"
              >
                {/* Product Image */}
                <div className="w-28 h-28 shrink-0">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={thumbnail}
                    alt="Product"
                  />
                </div>

                {/* Product Content */}
                <div className="flex flex-col justify-between flex-1 w-full">
                  <div className="flex justify-between items-start mb-3">
                    <div className="desc text-sm sm:text-base font-medium text-gray-200 line-clamp-2 max-w-[80%]">{title}</div>
                    <button className="text-red-400 hover:text-red-500 text-sm font-medium transition cursor-pointer" onClick={() => deleteCartItem(id)}>
                      Delete
                    </button>
                  </div>

                  <div className="flex justify-between items-center mt-auto">
                    <div className="prices">
                      <span className="final-price text-lg font-semibold mr-2 text-indigo-400">${price}</span>
                      <span className="price-before-discount line-through text-gray-500 text-sm">${fullPrice.toFixed(2)}</span>
                    </div>

                    <div className="quantity-control border border-gray-600 px-4 py-1 rounded-full flex items-center gap-4">
                      <span className="cursor-pointer select-none text-gray-300 hover:text-white transition" onClick={() => subItemQuantity(id)}>
                        -
                      </span>
                      <span className="font-bold text-gray-100">{quantityCount}</span>
                      <span className="cursor-pointer select-none text-gray-300 hover:text-white transition" onClick={() => addItemQuantity(id)}>
                        +
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div className="summary bg-gray-800 flex-1 rounded-2xl p-6 shadow-lg h-fit sticky top-4">
        <h2 className="text-2xl font-semibold mb-8 border-b border-gray-700 pb-2">
          Summary
        </h2>

        <div className="space-y-4 text-sm sm:text-base">
          <div className="flex justify-between">
            <span>Items total</span>
            <span className="font-medium">${itemsTotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Items discount</span>
            <span className="font-medium text-green-400">- ${itemsDiscount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-medium">$
              {(itemsTotal - itemsDiscount).toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-medium text-green-400">Free</span>
          </div>

          <div className="border-t border-gray-700 pt-4 mt-4 flex justify-between text-lg font-semibold">
            <span>Estimated Total</span>
            <span className="text-indigo-400">$
              {(itemsTotal - itemsDiscount).toFixed(2)}
            </span>
          </div>
        </div>

        <button className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl text-white font-medium text-base transition">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );

}

export default Cart;