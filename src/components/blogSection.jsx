import { Link } from "react-router-dom";

const featuredBlogs = [
  {
    id: 1,
    title: "Streetwear Essentials 2025",
    image:
      "https://images.unsplash.com/photo-1626781309887-cdfb9f258c64?q=80&w=1023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snippet: "Discover the must-have streetwear pieces that define 2025.",
    slug: "streetwear-essentials-2025",
  },
  {
    id: 2,
    title: "Layering Jackets Like a Pro",
    image:
      "https://images.unsplash.com/photo-1628030328071-538b251a4455?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snippet: "A complete guide to layering jackets for fashion and comfort.",
    slug: "layering-jackets",
  },
  {
    id: 3,
    title: "Accessorizing With Caps",
    image:
      "https://images.unsplash.com/photo-1635650804512-003e5ee6ccac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    snippet: "How to pick and style caps to complement your outfit.",
    slug: "accessorizing-with-caps",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header: Latest Blog + View All */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest md:text-left text-center w-full md:w-auto mb-4 md:mb-0">
            Latest Blog
          </h2>
          <Link
            to="/blog"
            className="bg-transparent border border-black px-6 py-2 uppercase font-semibold tracking-wide hover:bg-black hover:text-white transition xl:block hidden"
          >
            View All Blogs
          </Link>
        </div>
        <hr className="-mt-3 text-gray-300" />
        <br />
        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {featuredBlogs.map((blog) => (
            <Link
              key={blog.id}
              to="/blog"
              className="bg-white text-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-700 text-sm">{blog.snippet}</p>
              </div>
            </Link>
          ))}
          <Link
            to="/blog"
            className="text-center bg-transparent border border-black px-6 py-2 uppercase font-semibold tracking-wide hover:bg-black hover:text-white transition md:hidden block"
          >
            View All Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
