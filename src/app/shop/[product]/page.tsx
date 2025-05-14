import Image from "next/image";
import Header from "../../../components/Header";
import Hero2 from "../../../components/Hero2";
import Footer2 from "../../../components/Footer2";
import ProductDetail from "../components/ProductDetail";







export default function Chefs() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero2 title="Shop Details" path="Home / Shop Details"/>
        <ProductDetail/>
        
      


        <Footer2/>
      </main>
    </div>
  );
}
