import Image from "next/image";
import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";
import Footer2 from "../../components/Footer2";
import BookTablePage from "./components/BookTablePage";


export default function Chefs() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero2 title="BOOK A TABLE" path="Home / Book a Table"/>
        <BookTablePage/>
        
      


        <Footer2/>
      </main>
    </div>
  );
}
