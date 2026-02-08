const OurStory = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[70vh] flex items-center">
      {/* Background Image */}
      <img
        className=" absolute top-0 left-0 w-full h-full object-cover"
        loading="lazy"
        src="https://images.unsplash.com/photo-1697425602824-e7a457493678?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 md:mt-15">
        <div className="text-center">
          <h2 className="text-[1.5rem] md:text-[2.2rem]  uppercase tracking-widest mb-6 text-white font-serif md:leading-11">
            Embrace independence <br />
            and redefine <br />
            your fashion
          </h2>

          <a
            href="/story"
            className="inline-block mt-6 bg-transparent text-white px-8 py-3 uppercase font-semibold tracking-wider border border-white hover:bg-white hover:text-black transition"
          >
            OUR STORY
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
