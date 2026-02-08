import { Link } from "react-router-dom";

const CollectionCard = ({ collection }) => (
  <Link to={`/collections/${collection.slug}`}>
    <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
      <img
        src={collection.image}
        alt={collection.name}
        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {collection.name}
        </h3>
      </div>
    </div>
  </Link>
);

export default CollectionCard;
