import Navbar from "./navbar";

const Hero = () => {
  return (
    <section className="relative md:h-[95vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://assets.mixkit.co/videos/1368/1368-720.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay (does NOT block clicks) */}
      <div className="absolute inset-0 bg-black/50 pointer-events-none"></div>

      {/* Navbar */}
      <div className="absolute top-0 w-full z-50">
        <Navbar theme="light" />
      </div>

      {/* Content */}
      <div className="relative z-40 flex flex-wrap items-center h-full md:px-10 px-5 md:py-80 py-40 md:gap-30 gap-10">
        <div className="xl:flex-3">
          <label className="text-white font-extralight text-md">
            EST. 2020
          </label>
          <h1 className="text-white md:text-[3rem] text-[1.6rem] font-serif mt-2">
            FASHION THAT STANDS THE TEST OF TIME
          </h1>
        </div>

        <div className="xl:flex-2 ">
          <p className="text-white md:font-medium md:text-md text-sm ">
            We bring fashion that transcends time, a blend <br />
            of classic aesthetics with modern materials.
          </p>

          <a
            href="/shop"
            className="inline-block md:mt-6 mt-10 bg-white text-black md:px-28 px-8 py-3 uppercase font-semibold tracking-wider hover:bg-gray-200 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
