import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Content from "./content/content";
import SEO from "@/components/SEO/SEO";

export default function Services() {
  return (
    <> 
      <SEO
       title="Our Services | Nalab Solutions"
       description="Explore our web design, web development, custom software, SEO, and digital solutions. We create fast, modern, and scalable products tailored to your business."
       url="https://nalabsolutions.com/services"
      />    
      <Header />
      <Content/>
      <Footer />
    </>
  );
}
