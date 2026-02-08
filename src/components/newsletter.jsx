const Newsletter = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-10 md:p-14 shadow-md overflow-hidden">
          {/* LEFT CONTENT */}
          <div>
            <span className="uppercase tracking-widest text-sm font-semibold text-gray-500">
              Newsletter
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-black mt-4 mb-6">
              BECOME A MEMBER
            </h2>

            <p className="text-gray-600 mb-8 max-w-md">
              Get early access to new drops, exclusive discounts, and
              behind-the-scenes updates from Apex.
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-black text-white font-medium hover:bg-gray-900 transition"
              >
                Subscribe
              </button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative group rounded-2xl overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1692650759365-9b7a033833eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Apex newsletter"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

            {/* Floating text */}
            <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
              <h4 className="text-lg font-semibold">Exclusive Drops</h4>
              <p className="text-sm text-white/80">Members only releases</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
