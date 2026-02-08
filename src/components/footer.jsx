import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Mail,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif tracking-widest mb-4">APEX</h3>
            <p className="text-white/70 leading-relaxed max-w-md">
              Apex is a premium fashion brand blending timeless design with
              modern street aesthetics. Built for confidence.
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider mb-4">
              Shop
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="/shop" className="hover:text-white transition">
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="/collections/hoodies"
                  className="hover:text-white transition"
                >
                  Hoodies
                </a>
              </li>
              <li>
                <a
                  href="/collections/jackets"
                  className="hover:text-white transition"
                >
                  Jackets
                </a>
              </li>
              <li>
                <a
                  href="/collections/tshirts"
                  className="hover:text-white transition"
                >
                  T-Shirts
                </a>
              </li>
              <li>
                <a
                  href="/collections/caps"
                  className="hover:text-white transition"
                >
                  Caps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-white/70">
              <li>
                <a href="/story" className="hover:text-white transition">
                  Our Story
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-white transition">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold uppercase tracking-wider mb-4">
              Newsletter
            </h4>
            <p className="text-white/70 mb-4 text-sm">
              Subscribe for exclusive drops & early access.
            </p>

            <div className="flex items-center border border-white/20 rounded-full overflow-hidden">
              <span className="px-3 text-white/50">
                <Mail size={18} />
              </span>
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent flex-1 py-2 px-2 text-sm outline-none"
              />
              <button className="bg-white text-black px-4 py-2 hover:bg-gray-200 transition">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Apex Clothing. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
