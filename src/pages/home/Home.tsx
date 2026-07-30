import Header from "@/components/layout/header/Header";
import Hero from "./hero/Hero";
import Intro from "./intro/Intro";


export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      {/* <RecentWork /> */}
    </>
  );
}