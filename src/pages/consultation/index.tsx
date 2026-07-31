import { GetStaticProps } from "next";
import ConsultationPage from "./Consultation";

export default function Consultation() {
  return <ConsultationPage />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
};