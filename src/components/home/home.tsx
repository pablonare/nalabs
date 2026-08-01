import Header from "@/components/layout/header/Header";
import Hero from "./hero/Hero";
import Intro from "./intro/Intro";
import RecentWork from "./recentwork/RecentWork";
import AboutUs from "./aboutus/about-us";
import Footer from "@/components/layout/footer/Footer";
import SEO from "@/components/SEO/SEO";

export default function Home() {
  return (
    <>
     <SEO
        title="Nalab Solutions | Web Design & Software Development"
        description="We build modern websites, web applications and digital solutions for businesses worldwide."
        url="https://nalabsolutions.com"
      />
      
      <Header />
      <Hero />
      <Intro />
      <RecentWork />
      <AboutUs />
      <Footer />  
    </>
  );
}