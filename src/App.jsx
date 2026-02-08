import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import ProductPage from "./pages/product";
import Contact from "./pages/contact";
import CollectionPage from "./pages/collectionPage";
import Success from "./pages/success";
import Blog from "./pages/blog";
import Story from "./pages/story";
import TryOn from "./pages/tryOn";

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/story" element={<Story />} />
          <Route
            path="/collections/:collectionName"
            element={<CollectionPage />}
          />
          <Route path="/success" element={<Success />} />
          <Route path="/try-on" element={<TryOn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
