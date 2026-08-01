import { GetStaticProps } from "next";
import ServicesPage from "@/components/services/services";

export default function Services() {
  return <ServicesPage />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
};