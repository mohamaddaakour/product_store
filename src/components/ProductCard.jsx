// icons
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const ProductCard = ({ product }) => {
  const { name, image, price } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col">
      
      <div className="h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-5 flex flex-col grow">
        <h2 className="text-2xl font-bold text-gray-800">{name}</h2>

        {price && (
          <span className="mt-3 text-xl font-semibold text-cyan-600">
            ${price}
          </span>
        )}

        <div className="flex gap-3 mt-5">
          <button
            type="button"
            aria-label="Edit product"
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <CiEdit size={20} />
            Edit
          </button>

          <button
            type="button"
            aria-label="Delete product"
            className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-xl transition focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <MdDelete size={20} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;