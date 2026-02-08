import { Link, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import ProductCard from "../components/productCard";
import { allProducts } from "../data/products";
import TrustBar from "../components/trustBar";
import Footer from "../components/footer";
const CollectionPage = () => {
  const { collectionName } = useParams();

  // Filter products by collection
  const filteredProducts = allProducts.filter(
    (prod) => prod.collection === collectionName
  );

  // Optional: dynamic hero images per collection
  const heroImages = {
    hoodies:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=1600&q=80",
    jackets:
      "https://images.unsplash.com/photo-1618354699017-b05e04d564b8?auto=format&fit=crop&w=1600&q=80",
    tshirts:
      "https://images.unsplash.com/photo-1612831455540-4f268ba72e92?auto=format&fit=crop&w=1600&q=80",
    caps: "https://images.unsplash.com/photo-1589987609935-6f2b06220e8a?auto=format&fit=crop&w=1600&q=80",
  };

  const heroImage = heroImages[collectionName] || heroImages["hoodies"];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Navbar */}
      <Navbar theme="light" />

      {/* Hero Section */}
      <section
        className="relative h-64 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 "></div>
        <h1 className=" text-center relative z-10 text-4xl md:text-5xl font-bold uppercase text-black">
          {collectionName.charAt(0).toUpperCase() + collectionName.slice(1)}{" "}
          Collection
        </h1>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4 text-gray-800 text-sm">
        <Link to="/" className="hover:underline">
          Home
        </Link>{" "}
        {" > "}
        <span className="capitalize">{collectionName}</span>
      </div>

      {/* Products Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-black">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        ) : (
          <p className="text-center text-white/60">
            No products found in this collection.
          </p>
        )}
      </section>
      <TrustBar />
      <Footer />
    </div>
  );
};

export default CollectionPage;
