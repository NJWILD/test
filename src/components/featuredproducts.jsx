import { allProducts } from "../data/products";
import ProductCard from "./productCard";

const FeaturedProducts = () => {
  // Filter products that are marked as new arrivals
  const newArrivals = allProducts.filter((product) => product.isNewArrival);

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-wrap justify-between items-center gap-8 md:mb-12 -mb-10">
        <div className="xl:flex-3">
          <h2 className="text-3xl font-bold text-black mb-2 capitalize font-mono">
            products that match your style
          </h2>
          <p className="text-lg font-medium text-gray-600 mb-6">
            Shop the Latest Styles: Stay ahead of the curve with our newest
            arrivals
          </p>
        </div>
        <div className="xl:flex-1 md:block hidden">
          <a
            href="/shop"
            className="font-medium text-2xl underline underline-offset-6"
          >
            All products
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 py-20">
        {newArrivals.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className=" md:hidden block">
        <a
          href="/shop"
          className="font-medium text-2xl underline underline-offset-6"
        >
          All products
        </a>
      </div>
    </section>
  );
};

export default FeaturedProducts;
