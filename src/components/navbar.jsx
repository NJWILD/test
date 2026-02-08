import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useCart } from "../context/cartContext";
import { useCurrency } from "../context/currencyContext";
import { allProducts } from "../data/products";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Our Story", path: "/story" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = ({ theme = "light" }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const { totalItems } = useCart();
  const [animate, setAnimate] = useState(false);
  const [prevTotal, setPrevTotal] = useState(totalItems);
  const { currency, setCurrency } = useCurrency();

  /* 🔍 Modern Search */
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (totalItems > prevTotal) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 300);
    }
    setPrevTotal(totalItems);
  }, [totalItems, prevTotal]);

  useEffect(() => {
    if (searchOpen) {
      searchRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
  }, [searchOpen]);

  const results =
    query.length > 0
      ? allProducts.filter((p) =>
          p.name.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  const handleSelect = (id) => {
    navigate(`/product/${id}`);
    setSearchOpen(false);
  };

  const getBgColor = () =>
    theme === "light"
      ? isSticky
        ? "bg-white/90"
        : "bg-white"
      : isSticky
      ? "bg-white/90"
      : "bg-transparent";

  const getTextColor = () =>
    theme === "light" ? "text-black" : isSticky ? "text-black" : "text-white";

  const getIconColor = () =>
    theme === "light" || isSticky ? "black" : "white";

  const getBadgeColors = () =>
    theme === "light" || isSticky
      ? "bg-black text-white"
      : "bg-white text-black";

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 backdrop-blur-md ${getBgColor()}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-18">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Apex Logo"
              className={`w-auto -mt-7 transition-all duration-300 ${
                isSticky ? "h-26" : "h-25"
              }`}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex flex-1 justify-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition ${
                    isActive
                      ? getTextColor()
                      : `${getTextColor()}/70 hover:${getTextColor()}`
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <select
              className="text-black rounded px-2 py-1 hidden md:block"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="NGN">NGN</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
            </select>

            <button onClick={() => setSearchOpen(true)}>
              <Search size={20} color={getIconColor()} />
            </button>

            <Link to="/cart" className="relative">
              <ShoppingBag size={20} color={getIconColor()} />
              <span
                className={`absolute -top-2 -right-2 text-[10px] rounded-full px-1 ${getBadgeColors()} ${
                  animate ? "animate-bounce" : ""
                }`}
              >
                {totalItems}
              </span>
            </Link>

            <button
              className={`md:hidden ${getTextColor()}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden">
          <div className="absolute top-0 right-0 w-4/5 max-w-sm h-full bg-white shadow-xl animate-slideIn">
            <div className="flex flex-col  px-6 gap-6 py-32">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium ${
                      isActive ? "text-black" : "text-gray-600 hover:text-black"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {/* Currency (Mobile) */}
              <select
                className="mt-6 border rounded px-3 py-2"
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <option value="NGN">NGN</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* SEARCH MODAL */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 backdrop-blur-sm pt-24"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="bg-white w-full max-w-xl mx-4 rounded-xl shadow-xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 p-4 border-b">
              <Search size={18} />
              <input
                ref={searchRef}
                type="text"
                placeholder="Search products..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full outline-none text-sm"
              />
              <button onClick={() => setSearchOpen(false)}>
                <X size={18} />
              </button>
            </div>

            <div className="max-h-72 overflow-y-auto">
              {results.length > 0
                ? results.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => handleSelect(p.id)}
                      className="w-full text-left px-4 py-3 hover:bg-gray-100 flex items-center gap-3"
                    >
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-10 h-10 object-cover rounded"
                      />
                      <div>
                        <p className="text-sm font-medium">{p.name}</p>
                        <p className="text-xs text-gray-500">{p.category}</p>
                      </div>
                    </button>
                  ))
                : query && (
                    <p className="px-4 py-6 text-sm text-gray-500">
                      No products found
                    </p>
                  )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
