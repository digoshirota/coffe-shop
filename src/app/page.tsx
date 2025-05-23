import Header from "../components/Header";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import ServicesSection from "../components/ServiceSection";
import DeliciousFoodsSection from "../components/DeliciousFoodsSection";
import FoodGallerySection from "../components/FoodGallerySection";
import TestimonialSection from "../components/TestimonialSection";
import ReservationSection from "../components/ReservationSection";
import ChefsSection from "../components/ChefsSection";
import HeroFastFood from "../components/HeroFastFood";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero/>
        <Welcome/>
        <ServicesSection/>
        <DeliciousFoodsSection/>
        <FoodGallerySection/>
        <TestimonialSection/>
        <ReservationSection/>
        <ChefsSection/>
        <HeroFastFood/>
        <LatestNews/>
        <Footer/>
      </main>
    </div>
  );
}
