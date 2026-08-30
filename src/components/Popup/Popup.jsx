
import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const Popup = ({ orderpopup, setOrderPopup }) => {
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleOrder = (e) => {
    e.preventDefault()
    setOrderPlaced(true)
  }

  const closeSuccessPopup = () => {
    setOrderPlaced(false)
    setOrderPopup(false)
  }

  return (
    <>
      {orderpopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">

            {/* Order Form */}
            {!orderPlaced && (
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">

                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-xl font-semibold">
                      Order Now
                    </h1>
                  </div>

                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>

                {/* Form */}
                <form onSubmit={handleOrder} className="mt-4">

                  <input
                    type="text"
                    placeholder="Name"
                    required
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
                  />

                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
                  />

                  <input
                    type="text"
                    placeholder="Address"
                    required
                    className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
                  />

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-5 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>

                </form>
              </div>
            )}

            {/* Success Popup */}
            {orderPlaced && (
              <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px] text-center">

                <div className="flex justify-end">
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={closeSuccessPopup}
                  />
                </div>

                <h1 className="text-2xl font-bold text-green-500 mb-3">
                  Order Placed!
                </h1>

                <p className="text-gray-600 dark:text-gray-300 mb-5">
                  Your order has been placed successfully.
                </p>

                <button
                  onClick={closeSuccessPopup}
                  className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-5 rounded-full hover:scale-105 duration-200"
                >
                  Done
                </button>

              </div>
            )}

          </div>
        </div>
      )}
    </>
  )
}

export default Popup

