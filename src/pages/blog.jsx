import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";

const Blog = () => {
  // Dummy blogs
  const mainBlog = {
    id: 1,
    title: "The Future of Street Fashion",
    excerpt:
      "Explore how streetwear is redefining modern fashion and what trends are shaping the industry.",
    image:
      "https://images.unsplash.com/photo-1538329972958-465d6d2144ed?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "Dec 15, 2025",
  };

  const sideBlogs = [
    {
      id: 2,
      title: "Top 5 Sneaker Releases This Month",
      image:
        "https://images.unsplash.com/photo-1549298916-f52d724204b4?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Dec 10, 2025",
    },
    {
      id: 3,
      title: "Layering Styles for Winter",
      image:
        "https://plus.unsplash.com/premium_photo-1671030274122-b6ac34f87b8b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Dec 8, 2025",
    },
    {
      id: 4,
      title: "Essential Streetwear Accessories",
      image:
        "https://images.unsplash.com/photo-1626781309887-cdfb9f258c64?q=80&w=1023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Dec 5, 2025",
    },
  ];

  const moreBlogs = [
    {
      id: 5,
      title: "Eco-Friendly Fabrics in 2025",
      image:
        "https://images.unsplash.com/photo-1628030328071-538b251a4455?q=80&w=673&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Nov 30, 2025",
    },
    {
      id: 6,
      title: "Streetwear Collaborations You Can't Miss",
      image:
        "https://images.unsplash.com/photo-1721713168896-11db10d9740b?q=80&w=1175&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Nov 28, 2025",
    },
    {
      id: 7,
      title: "Styling Apex Hoodies Like a Pro",
      image:
        "https://images.unsplash.com/photo-1512400930990-e0bc0bd809df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Nov 25, 2025",
    },
    {
      id: 8,
      title: "Caps & Hats: Street Essentials",
      image:
        "https://images.unsplash.com/photo-1635650804512-003e5ee6ccac?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "Nov 20, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar theme="light" />

      <main className="max-w-7xl mx-auto px-6 py-30">
        {/* Main + Aside Section */}
        <h2 className="text-5xl font-bold mb-8 tracking-widest">
          LATEST BLOGS
        </h2>

        <section className="grid lg:grid-cols-3 gap-10 mb-20">
          {/* Featured Blog */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition duration-300">
            <img
              src={mainBlog.image}
              alt={mainBlog.title}
              className="w-full h-80 object-cover"
            />
            <div className="p-8 py-15">
              <p className="text-gray-400 text-sm mb-2">{mainBlog.date}</p>
              <h2 className="text-3xl font-bold mb-4">{mainBlog.title}</h2>
              <p className="text-gray-600 mb-6">{mainBlog.excerpt}</p>
              <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
                Read More
              </button>
            </div>
          </div>

          {/* Aside Blogs */}
          <aside className="flex flex-col gap-6">
            {sideBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-32 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-400 text-xs mb-1">{blog.date}</p>
                  <h3 className="font-semibold text-lg">{blog.title}</h3>
                </div>
              </div>
            ))}
          </aside>
        </section>

        {/* More Blogs Grid */}
        <section>
          <h2 className="text-4xl font-bold mb-8 tracking-widest">
            More Blogs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {moreBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-8 flex flex-col gap-2">
                  <p className="text-gray-400 text-xs">{blog.date}</p>
                  <h3 className="font-semibold text-lg">{blog.title}</h3>
                  <button className="mt-4 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
