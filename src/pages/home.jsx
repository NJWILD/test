import TopHeader from "../components/topHeader";
import Hero from "../components/hero";
import FeaturedProducts from "../components/featuredproducts";
import OurStory from "../components/ourStory";
import Testimonials from "../components/testimonials";
import Collections from "../components/collections";
import BlogSection from "../components/blogSection";
import FAQSection from "../components/FAQSection";
import Newsletter from "../components/newsletter";
import TrustBar from "../components/trustBar";
import Footer from "../components/footer";
const Home = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <OurStory />
      <Testimonials />
      <Collections />
      <BlogSection />
      <FAQSection />
      <Newsletter />
      <TrustBar />
      <Footer />
    </main>
  );
};

export default Home;
