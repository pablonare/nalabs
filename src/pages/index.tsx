import { GetStaticProps } from "next";
import Home from "./home/home";

export default function Index() {
  return <Home />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default,
    },
  };
};