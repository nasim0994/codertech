import Hero from "@/components/modules/home/Hero";
import Services from "@/components/modules/home/Services";
import About from "@/components/modules/home/About";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
    </>
  );
}
