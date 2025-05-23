import Image from "next/image";

export default function Services() {
  return <section className="pt-7 pb-10">
    <div className="container">
      <div className="grid grid-cols-7 items-start gap-10">
      <div className="col-span-2">
        <h1 className="text-4xl font-bold text-secondary">Our Services</h1>
        <p className="mt-4 text-neutral-content">We are committed to digitalizing your business. We provide Integrated marketing company that delivers graphics, web, and marketing solutions for businesses of all sizes.</p>
      </div>

      <div className="col-span-5 grid gap-3 grid-cols-3 items-start" >
        {/* Service Card */}
        <div className="p-4 rounded-lg shadow-md h-[260px] bg-primary text-base-100 flex flex-col items-center justify-center text-center hover:bg-secondary duration-300">
          <Image width={50} height={50} src="/web.png" alt="web" />
          <h2 className="mt-3 text-[22px] font-semibold">Digital Marketing</h2>
          <p className="mt-1.5 text-[15px]">Bangladesh has now become an emerging potential...</p>
        </div>
        {/* Service Card */}
        <div className="p-4 rounded-lg shadow-md h-[260px] bg-secondary text-base-100 flex flex-col items-center justify-center text-center -mt-6 hover:bg-secondary duration-300">
          <Image width={50} height={50} src="/web.png" alt="web" />
          <h2 className="mt-3 text-[22px] font-semibold">Web Development</h2>
          <p className="mt-1.5 text-[15px]">Bangladesh has now become an emerging potential...</p>
        </div>
        {/* Service Card */}
        <div className="p-4 rounded-lg shadow-md h-[260px] bg-primary text-base-100 flex flex-col items-center justify-center text-center hover:bg-secondary duration-300">
          <Image width={50} height={50} src="/web.png" alt="web" />
          <h2 className="mt-3 text-[22px] font-semibold">Software Development</h2>
          <p className="mt-1.5 text-[15px]">Bangladesh has now become an emerging potential...</p>
        </div>
        {/* Service Card */}
        <div className="p-4 rounded-lg shadow-md h-[260px] bg-primary text-base-100 flex flex-col items-center justify-center text-center hover:bg-secondary duration-300">
          <Image width={50} height={50} src="/web.png" alt="web" />
          <h2 className="mt-3 text-[22px] font-semibold">Videography</h2>
          <p className="mt-1.5 text-[15px]">Bangladesh has now become an emerging potential...</p>
        </div>
        {/* Service Card */}
        <div className="p-4 rounded-lg shadow-md h-[260px] bg-primary text-base-100 flex flex-col items-center justify-center text-center -mt-6 hover:bg-secondary duration-300">
          <Image width={50} height={50} src="/web.png" alt="web" />
          <h2 className="mt-3 text-[22px] font-semibold">SEO</h2>
          <p className="mt-1.5 text-[15px]">Bangladesh has now become an emerging potential...</p>
        </div>
        {/* Service Card */}
        <div className="p-4 rounded-lg shadow-md h-[260px] bg-primary text-base-100 flex flex-col items-center justify-center text-center hover:bg-secondary duration-300">
          <Image width={50} height={50} src="/web.png" alt="web" />
          <h2 className="mt-3 text-[22px] font-semibold">UI-Ux Design</h2>
          <p className="mt-1.5 text-[15px]">Bangladesh has now become an emerging potential...</p>
        </div>
      </div>
      </div>
    </div>
  </section>;
}
