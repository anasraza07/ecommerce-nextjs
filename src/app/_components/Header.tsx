import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Header({ searchInput, setSearchInput, filters, setFilters }) {
  const { pathname } = useLocation();
  const { cart } = useContext(CartContext);

  const addFilter = category => {
    setFilters(prev => {
      if (filters.includes(category)) {
        return prev.filter(f => f != category)
      } else {
        return [...prev, category]
      }
    })
  };

  return (
    <header className="bg-gray-900 sticky top-0 z-10 py-5 border-b border-gray-700 shadow-md">
      <nav className="flex flex-wrap items-center justify-between gap-4">
        <Link to={"/"} className="text-2xl font-bold tracking-wide">
          <span className="text-indigo-400">Shop</span>Ease
        </Link>
        <div className="flex flex-1 max-w-md border border-gray-700 rounded-full overflow-hidden bg-gray-800">
          <input type="text" placeholder="Search..." className="flex-1 px-4 py-2 outline-none text-sm bg-transparent text-gray-200 placeholder-gray-500" onChange={(e) => setSearchInput(e.target.value.toLowerCase())} value={searchInput} />
        </div>

        <Link to={"/cart"} className="go-to-cart flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
          <BsCart3 size="1.8em" />
          <div className="text-center">
            <div className="bg-indigo-600 text-white px-2 rounded-full text-sm font-medium">{cart.length}</div>
            <div className="text-sm capitalize font-medium">Cart</div>
          </div>
        </Link>
      </nav>
      {pathname == "/" && <div className="categories flex justify-center flex-wrap gap-2 mt-4">
        {categories.map((category, index) => (
          <button key={index} className={`px-4 py-1 text-sm rounded-full border border-gray-700 transition capitalize cursor-pointer ${filters.includes(category) ? "bg-indigo-600 text-white hover:bg-indigo-500" : "bg-transparent hover:bg-gray-700"}`}
            onClick={() => addFilter(category)}>{category}</button>
        ))}
      </div>}
    </header>
  )
}