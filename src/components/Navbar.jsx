import React, { useEffect, useState } from "react"
import Logo from "../assets/logo (1).png"
import { IoMdSearch } from "react-icons/io"
import { FaCartShopping } from "react-icons/fa6"
import { FaCaretDown } from "react-icons/fa"
import DarkMode from "./DarkMode"

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids wear",
    link: "/#",
  },
  {
    id: 4,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 5,
    name: "Accessories",
    link: "/#",
  },
]

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
]

const Navbar = ({ handleOrderPopup }) => {
  const [search, setSearch] = useState("")
  const [products, setProducts] = useState([])

  // Fetch products
  useEffect(() => {
  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://dummyjson.com/products?limit=100"
      )

      const data = await response.json()

      // Keep only clothing/fashion products
      const clothingProducts = data.products.filter((product) =>
        [
          "mens-shirts",
          "mens-shoes",
          "womens-dresses",
          "womens-shoes",
          "womens-jewellery",
          "sunglasses",
        ].includes(product.category)
      )

      setProducts(clothingProducts)
    } catch (error) {
      console.log("Error fetching Products:", error)
    }
  }

  fetchProducts()
}, [])

  // Filter products according to search
 const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(search.toLowerCase()) ||
  product.category.toLowerCase().includes(search.toLowerCase())
)

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">

      {/* Upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center gap-2">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="font-bold text-xl sm:text-3xl flex items-center gap-1"
            >
              <img
                src={Logo}
                alt="Logo"
                className="w-8 sm:w-10"
              />
              Kalume
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex-1 flex justify-center min-w-0 ">
            <div className="relative group">

              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-[80px] sm:w-[100px] lg:w-[200px]
                lg:group-hover:w-[300px]
                transition-all duration-300
                rounded-full border border-gray-300
                px-3 py-1 text-sm
                focus:outline-none focus:border-primary
                dark:border-gray-500 dark:bg-gray-800 pr-10"
              />

              <IoMdSearch
                className="text-gray-500
                group-hover:text-primary
                absolute top-1/2
                -translate-y-1/2 right-4"
              />

              {/* Suggestions */}
              {search.trim() !== "" && (
                <div
                  className="absolute top-10 left-0
                  w-[280px]
                  bg-white dark:bg-gray-800
                  rounded-lg shadow-lg
                  z-[9999]
                  max-h-[350px]
                  overflow-y-auto"
                >

                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center gap-3
                        p-3 cursor-pointer
                        hover:bg-gray-100
                        dark:hover:bg-gray-700"
                      >

                        {/* Image */}
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-12 h-12 object-contain"
                        />

                        {/* Product details */}
                        <div>
                          <p className="text-sm font-semibold dark:text-white">
                            {product.title}
                          </p>

                          <p className="text-sm text-gray-500">
                            ${product.price}
                          </p>
                        </div>

                      </div>
                    ))
                  ) : (
                    <p className="p-3 text-gray-500">
                      No products found
                    </p>
                  )}

                </div>
              )}

            </div>
          </div>

          {/* Order Button */}
          <button
            onClick={() => handleOrderPopup()}
            className="bg-gradient-to-r from-primary to-secondary
            transition-all duration-200
            text-white py-1 px-2 sm:px-4
            rounded-full flex items-center gap-3
            group flex-shrink-0"
          >
            <span className="group-hover:block hidden">
              Order
            </span>

            <FaCartShopping className="text-xl text-white" />
          </button>

          {/* Dark Mode */}
          <div className="flex-shrink-0">
            <DarkMode />
          </div>

        </div>
      </div>

      {/* Lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">

          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">

            <a
              href="#"
              className="flex items-center gap-[2px] py-2"
            >
              Trending Products

              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>

            <div
              className="absolute z-[9999]
              hidden group-hover:block
              w-[150px] rounded-md
              bg-white p-2 text-black shadow-md"
            >
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full
                      rounded-md p-2
                      hover:bg-primary/20"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </li>

        </ul>
      </div>

    </div>
  )
}

export default Navbar