import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ConsultationForm from "./consultationform/ConsultationForm";
import SEO from "@/components/SEO/SEO";

export default function Consultation() {
  return (
    <>
      <SEO
        title="Free Web Consultation | Nalab Solutions"
        description="Schedule your free web consultation with Nalab Solutions. Get expert advice and a personalized strategy for your website, web application, or digital project."
        url="https://nalabsolutions.com/consultation"
      />
      <Header />
      <ConsultationForm />
      <Footer />
    </>
  );
}