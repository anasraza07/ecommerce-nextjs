"use client";
import Header from '@/_components/header/Header';
import Product from '@/_components/product/Product';
import { usePathname } from 'next/navigation';
import { FaCartPlus } from 'react-icons/fa';

export default function page() {
  // const { pathname } = useLocation();
  const pathname = usePathname();
  console.log(pathname);

  return (
    <main className="py-10">
      <h2 className="text-3xl font-semibold mb-8 text-center text-indigo-400">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </main>
  )
}
