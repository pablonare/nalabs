import { GetStaticProps } from "next";
import GetStarted from "./getstarted";

export default function GetStartedPage() {
  return <GetStarted />;
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../../messages/${locale}.json`)).default,
    },
  };
};

