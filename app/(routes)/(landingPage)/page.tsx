import Navbar from "./_sections/Navbar";
import Hero from "./_sections/Hero";
import Introduction from "./_sections/Introduction";
import Features from "./_sections/Features";
import Faqs from "./_sections/Faqs";
import Footer from "./_sections/Footer";

export default function LandingPage() {
  return (
    <div >
      <Navbar/>
      <Hero/>
      <Introduction/>
      <Features/>
      <Faqs/>
      <Footer/>
    </div>
  );
}
