"use client";
// import Image from "next/image";
import { useEffect, useState } from "react";
import Header from "./_components/Header";
import CartProvider from "./_context/CartContext";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data.products)
      })
      .catch(error => console.error("Error fetching data: ", error))
  }, [])

  // const categories = ["all"];
  // products.forEach(product => {
  //   if (!categories.includes(product.category)) {
  //     categories.push(product.category)
  //   };
  // });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        <CartProvider>
          <Header searchInput={searchInput}
            setSearchInput={setSearchInput} filters={filters}
            setFilters={setFilters} />
        </CartProvider>
      </div>
    </div>
  );
}
