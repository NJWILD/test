import { Quote, Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Daniel Okoye",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
    message:
      "Apex isn’t just clothing — it’s confidence. Every piece feels intentional and premium.",
    rating: 5,
  },
  {
    name: "Aisha Bello",
    role: "Fashion Enthusiast",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80",
    message:
      "The quality surprised me. The fit, the fabric, everything feels thought through.",
    rating: 4,
  },
  {
    name: "Michael Stone",
    role: "Streetwear Collector",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    message:
      "Apex pieces stand out without trying too hard. Easily one of my favorite brands.",
    rating: 5,
  },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const animationRef = useRef(null);
  const speed = 0.5; // smoother than 1

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    const animate = () => {
      container.scrollLeft += speed;

      if (container.scrollLeft >= totalWidth) {
        container.scrollLeft -= totalWidth;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <section className="relative py-24 bg-black text-white overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-4">
            Customer Reviews
          </h2>
          <p className="text-white/70 max-w-xl mx-auto">
            Trusted by creatives, collectors, and fashion lovers.
          </p>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden will-change-transform"
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="min-w-[320px] md:min-w-95 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 relative"
            >
              <Quote
                className="absolute top-6 right-6 text-white/20"
                size={28}
              />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={
                      i < item.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-white/30"
                    }
                  />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-6">
                “{item.message}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{item.name}</h4>
                  <p className="text-white/60 text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
