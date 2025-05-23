import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";
import Footer2 from "../../components/Footer2";
import BlogSection from "./components/BlogSection";
import { Suspense } from 'react'

export default function Contact() {
  return (
    <div className="">
      <main className="">
        <Header />
        <Hero2 title="Latest News" path="Home / Latest News" />
        <Suspense>
          <BlogSection />
        </Suspense>
        <Footer2 />
      </main>
    </div>
  );
}
