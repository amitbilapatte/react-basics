import { useState } from "react";

function Product({ thumbnail, title, rating, price }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <div onClick={() => setIsOpen(true)}>
        <img src={thumbnail} alt={title} className="w-full h-60 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="mb-1">Rating: {rating}</p>
          <p>Price: ${price}</p>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 max-w-lg">
            <img src={thumbnail} alt={title} onClick={() => setIsOpen(false)} className="w-full h-60 object-cover" />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-0 right-0 m-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
