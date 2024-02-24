import { useState } from "react";

function Product({ thumbnail, title, rating, price }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md overflow-hidden">
      <div onClick={() => setIsOpen(true)}>
        <img src={thumbnail} alt={title} height={60} />
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
