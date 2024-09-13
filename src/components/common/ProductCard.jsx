import React, { useState } from "react";
import { Star } from "lucide-react";

const ProductCard = ({ icon, title, rating, votes, description, content }) => {
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`w-4 h-4 ${
        i < Math.floor(rating)
          ? "text-[#97144d] fill-[#97144d]"
          : "text-gray-300"
      }`}
    />
  ));

  return (
    <div className="relative">
      <div className="bg-white border border-pink-200 rounded-lg p-6 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="text-[#97144d] mr-3">{icon}</div>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        <div className="flex flex-col gap-2 items-center mb-2">
          <div className="flex mr-2">{stars}</div>
          <span className="text-sm text-gray-600">
            Average: {rating.toFixed(1)} ({votes} votes)
          </span>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        {isPreviewVisible && (
          <div className="absolute z-10 bottom-12 left-10 mb-2 w-full min-h-24 max-w-sm">
            <div className="bg-[#FFF5EE] text-[#97144d] rounded-lg shadow-lg p-4">
              <h4 className="text-xl font-bold mb-2">{title}</h4>
              <p className="text-sm mb-4">{content}</p>
              <button className="bg-[#97144d] text-white py-1 px-3 rounded-md text-sm hover:bg-blue-600 transition-colors float-right">
                Get started
              </button>
            </div>
          </div>
        )}
        <button
          className="bg-[#97144d] text-white py-2 px-4 rounded-md hover:bg-[#b93267] transition-colors"
          onMouseEnter={() => setIsPreviewVisible(true)}
          onMouseLeave={() => setIsPreviewVisible(false)}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
