import Hero from "@/components/modules/home/Hero";
import Services from "@/components/modules/home/Services";
import About from "@/components/modules/home/About";
import WhyChoose from "@/components/modules/home/WhyChoose";

export default async function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChoose />
    </>
  );
}
