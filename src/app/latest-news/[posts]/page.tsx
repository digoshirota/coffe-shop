import Image from "next/image";
import Header from "../../../components/Header";
import Hero from "../../../components/Hero";
import Footer2 from "../../../components/Footer2";
import BlogDetails from "./component/BlogDetails";

export default function BlogDetail() {

  
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero/>
        <BlogDetails />
        <Footer2/>
      </main>
    </div>
  );
}
