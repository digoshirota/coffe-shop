import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";
import Footer2 from "../../components/Footer2";
import FoodGallery from "../../components/FoodGallery";

export default function FoodGalleryPosts() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero2 title="Gallery Page" path="Home / Gallery Page"/>
        <FoodGallery/>
        
    

        <Footer2/>
      </main>
    </div>
  );
}
