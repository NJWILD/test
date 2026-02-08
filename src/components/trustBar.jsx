import { Truck, ShieldCheck, RefreshCcw, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "Free nationwide delivery on all orders",
  },
  {
    icon: RefreshCcw,
    title: "Money-Back Guarantee",
    desc: "7-day hassle-free returns",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    desc: "100% secure and encrypted checkout",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "We’re here whenever you need us",
  },
];

const TrustBar = () => {
  return (
    <section className="md:py-20 py-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-gray-200 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-black text-white group-hover:scale-110 transition">
                  <Icon size={26} />
                </div>

                <h4 className="text-lg font-semibold text-black mb-2">
                  {item.title}
                </h4>

                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
