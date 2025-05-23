import Header from "../../components/Header";
import Hero2 from "../../components/Hero2";
import Footer2 from "../../components/Footer2";
import OfficeInformation from "./components/OfficeInformation";
import LeaveMessage from "./components/LeaveMessage";






export default function Contact() {
  return (
    <div className="">
      <main className="">
        <Header/>
        <Hero2 title="Contact Us" path="Home / Contact Us"/>
        
        <OfficeInformation/>
        <LeaveMessage/>


        <Footer2/>
      </main>
    </div>
  );
}
