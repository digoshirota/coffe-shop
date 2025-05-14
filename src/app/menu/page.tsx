import Image from "next/image";
import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";
import Footer2 from "../../components/Footer2";
import MenuList from "./components/Menulist";
import BookTable from "./components/BookTableSection";
import PopularChefs from "./components/PopularChefs";


export default function Chefs() {
  return (
    <div className="">
      <main className="">
        <Header />
        <Hero2 title="Menu" path="Home / Menu"/>
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <MenuList />
          </div>
        </section>
        <BookTable/>
        <PopularChefs/>
        <Footer2 />
      </main>
    </div>
  );
}
