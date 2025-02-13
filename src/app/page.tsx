import AboutUs from "@/components/AboutUs";
import GameFi from "@/components/GameFi";
import Hero from "@/components/Hero";
import TheProject from "@/components/TheProject";
import TheVision from "@/components/TheVision";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <TheVision />
      <TheProject />
      <GameFi/>
    </>
  );
}
