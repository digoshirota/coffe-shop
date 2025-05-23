import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";
import Footer2 from "../../components/Footer2";
import SectionHighlight from "./components/SectionHighlight";
import FoodGallery from "../../components/FoodGallery";
import CategorySection from "./components/CategorySection";





export default function About() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero2 title="ABOUT US" path="Home / About Us"/>
        <SectionHighlight/>
        <FoodGallery/>
        <CategorySection/>

        <Footer2/>
      </main>
    </div>
  );
}
