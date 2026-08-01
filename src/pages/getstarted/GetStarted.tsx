import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import Formulary from "./formulary/Formulary";
import SEO from "@/components/SEO/SEO";

export default function Home() {
  return (
    <>
      <SEO
        title="Get Started | Nalab Solutions"
        description="Start your project with Nalab Solutions. Tell us about your business, and we'll create a modern website, web application, or custom digital solution tailored to your needs."
        url="https://nalabsolutions.com/getstarted"
      />
      <Header />
      <Formulary />
      <Footer />
    </>
  );
}