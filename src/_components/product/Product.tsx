import { FaCartPlus } from "react-icons/fa";

export default function Product() {
  return (
    <div key={1} className="w-full max-w-xs mx-auto bg-gray-800 border border-gray-700 rounded-xl shadow-md hover:shadow-2xl hover:scale-[101%] transition flex flex-col justify-between overflow-hidden relative">
      <div className="h-50">
        <img className="w-full h-full object-cover object-top rounded-xl" src={"https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"}
          alt={"LASH"} />
        <button className="absolute bottom-3 right-3 bg-indigo-600 rounded-full p-3 hover:bg-indigo-700 transition cursor-pointer"
        // onClick={() => openModal(id)}
        >
          <FaCartPlus size="1.3em" color="white" /></button>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium line-clamp-2">{"Essence Mascara Lash Princess"}</h3>
        <p className="text-lg font-semibold mt-1 inline-block">
          ${9.99}</p>
        <p className="text-lg font-medium mt-1 inline-block line-through text-gray-400 ml-3">{(11).toFixed(2)}</p>
        <p className="text-sm text-gray-400 mt-1">
          ⭐ {(2.56).toFixed(1)}</p>
      </div>
    </div>
  )
}
