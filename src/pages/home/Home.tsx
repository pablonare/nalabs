import Header from "@/components/layout/header/Header";
import Hero from "./hero/Hero";
import Intro from "./intro/Intro";
import RecentWork from "./recentwork/RecentWork";
import AboutUs from "./aboutus/about-us";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <RecentWork />
      <AboutUs />
    </>
  );
}