import Navbar from "../components/navbar";
import Footer from "../components/footer";
import apexStory from "../assets/apexStory.jpg";

const Story = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar theme="light" />

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src={apexStory}
            alt="Hero Background"
            className="w-full h-full object-cover brightness-40"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-60 text-center">
          <h1 className="text-5xl md:text-6xl  font-bold mb-9">Our Story</h1>
          <p className="text-md md:text-xl text-gray-200 max-w-2xl mx-auto">
            Apex is where timeless streetwear meets modern confidence. Explore
            our journey and philosophy.
          </p>
        </div>
      </section>

      {/* Brand Journey / Timeline */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Journey</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              year: "2018",
              title: "Founded Apex",
              desc: "A vision of streetwear that blends luxury with modern design.",
              img: "https://plus.unsplash.com/premium_photo-1698339571425-7aa7d904234f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              year: "2020",
              title: "First Exclusive Drop",
              desc: "Launched our first limited edition collection that sold out instantly.",
              img: "https://images.unsplash.com/photo-1614975059433-b7638ab0b026?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
              year: "2023",
              title: "Global Recognition",
              desc: "Apex is now recognized for its premium streetwear aesthetics worldwide.",
              img: "https://images.unsplash.com/photo-1631427983988-9fc6c1c770fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <p className="text-gray-500 font-semibold">{item.year}</p>
                <h3 className="text-2xl font-bold my-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy / Values */}
      <section className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Our Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Quality",
                desc: "Only the finest materials and craftsmanship for our collections.",
                icon: "https://plus.unsplash.com/premium_photo-1689750544062-9052e8c21fba?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Style",
                desc: "Modern, timeless designs that elevate streetwear aesthetics.",
                icon: "https://plus.unsplash.com/premium_photo-1692650759713-c8efa4ab90c6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
              {
                title: "Inclusivity",
                desc: "Fashion for everyone, across cultures and lifestyles.",
                icon: "https://images.unsplash.com/photo-1601003179864-a0fb245d2ce2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle / Behind-the-Scenes Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Behind the Scenes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "https://plus.unsplash.com/premium_photo-1703113592039-4ed08300ed5c?q=80&w=1152&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1759821701939-10c874e8d83b?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1644291095901-090663ad1444?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1582748154704-99819866fb8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1723485643695-46c12680d4b0?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1682090657097-766f99d2941f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_photo-1759821701633-580b5143de67?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1557847223-d2373fcdc2eb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ].map((imgUrl, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden hover:scale-105 transition"
            >
              <img
                src={imgUrl}
                alt={`Gallery ${idx}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Team / Founder */}
      <section className="bg-gray-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Meet the Founder</h2>
          <p className="text-lg text-gray-200 mb-8">
            John Doe founded Apex with a mission to redefine streetwear by
            blending luxury, quality, and confidence in every piece.
          </p>
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300&q=80"
            alt="Founder"
            className="mx-auto rounded-full w-40 h-40 object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="relative bg-gray-950 text-white py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Experience Apex Today
        </h2>
        <p className="text-gray-300 mb-6">
          Join our community and explore our exclusive collections.
        </p>
        <button className="px-8 py-3 bg-white text-black rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
          Shop Now
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Story;
