import Image from "next/image";
import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";
import Footer2 from "../../components/Footer2";
import TeamMemberCard from "./components/TeamMemberCard";


export default function Chefs() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero2 title="Chef Details" path="Home / Chef Details"/>
        <TeamMemberCard/>
        
      


        <Footer2/>
      </main>
    </div>
  );
}
