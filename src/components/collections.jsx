import CollectionCard from "./collectionCard";

const collections = [
  {
    name: "Hoodies",
    slug: "hoodies",
    image:
      "https://plus.unsplash.com/premium_photo-1673827311290-d435f481152e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jackets",
    slug: "jackets",
    image:
      "https://images.unsplash.com/photo-1655156540681-f424619de9f1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "T-Shirts",
    slug: "tshirts",
    image:
      "https://images.unsplash.com/photo-1622351772377-c3dda74beb03?q=80&w=948&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Caps",
    slug: "caps",
    image:
      "https://images.unsplash.com/photo-1592882544304-1a3320823a79?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const Collections = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-12 text-center">
          Our Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {collections.map((col) => (
            <CollectionCard key={col.slug} collection={col} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
