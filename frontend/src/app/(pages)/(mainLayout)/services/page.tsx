import ServicesCom from "@/components/shared/main/ServicesCom";

export default function ServicesPage() {
  return (
    <section>
      <div className={"service_page_banner"}>
        <div className="text-center flex flex-col items-center justify-center md:w-3/5 mx-auto">
          <h1 className="text-4xl font-bold text-secondary">Our Services</h1>
          <p className="mt-3 text-[15px] text-neutral-content">
            We are committed to digitalizing your business. We provide
            Integrated marketing company that delivers graphics, web, and
            marketing solutions for businesses.
          </p>
        </div>
      </div>

      <div className="pb-10 container">
        <ServicesCom />
      </div>
    </section>
  );
}
