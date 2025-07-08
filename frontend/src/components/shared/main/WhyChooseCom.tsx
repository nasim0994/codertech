import { ImHappy } from "react-icons/im";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { FaChartLine } from "react-icons/fa6";
import Image from "next/image";

export default function WhyChooseCom() {
  return (
    <>
      <h2 className="text-secondary text-3xl font-bold text-center">
        Why Choose Us?
      </h2>
      <div className="mt-8 grid md:grid-cols-2 gap-10">
        <div className="flex flex-col gap-2">
          <div className="p-2 rounded shadow grid sm:grid-cols-8 items-start gap-3">
            <div className="mt-2 w-12 sm:w-[50px] h-12 sm:h-[50px] bg-secondary/10 border border-secondary/50 rounded-xl flex items-center justify-center">
              <ImHappy className="text-secondary sm:text-2xl" />
            </div>
            <div className="sm:col-span-7">
              <h2 className="text-lg font-semibold text-neutral mb-1">
                Customer Satisfaction
              </h2>
              <p className="text-neutral-content text-sm">
                Your satisfaction is our top priority. We work hard to ensure
                every experience is enjoyable and tailored just for you. Your
                Positive feedback inspires us to continually improve and serve
                you better!
              </p>
            </div>
          </div>
          <div className="p-2 rounded shadow grid sm:grid-cols-8 items-start gap-3">
            <div className="mt-2 w-12 sm:w-[50px] h-12 sm:h-[50px] bg-secondary/10 border border-secondary/50 rounded-xl flex items-center justify-center">
              <CiDeliveryTruck className="text-secondary text-2xl" />
            </div>
            <div className="sm:col-span-7">
              <h2 className="text-lg font-semibold text-neutral mb-1">
                On Time Delivery
              </h2>
              <p className="text-neutral-content text-sm">
                Our punctuality is our promise. We know how important timing is
                to you, so we try to deliver every task on time. Count on us for
                reliable, on-time delivery every time!
              </p>
            </div>
          </div>
          <div className="p-2 rounded shadow grid sm:grid-cols-8 items-start gap-3">
            <div className="mt-2 w-12 sm:w-[50px] h-12 sm:h-[50px] bg-secondary/10 border border-secondary/50 rounded-xl flex items-center justify-center">
              <FaRegStar className="text-secondary text-2xl" />
            </div>
            <div className="sm:col-span-7">
              <h2 className="text-lg font-semibold text-neutral mb-1">
                We Make brands Shine
              </h2>
              <p className="text-neutral-content text-sm">
                We ignite your brand&apos;s brilliance with innovative
                strategies and creative excellence, transforming your vision
                into a radiant reality that captivates, connects, and inspires
                engagement, loyalty, and lasting impact in a competitive digital
                landscape.
              </p>
            </div>
          </div>
          <div className="p-2 rounded shadow grid sm:grid-cols-8 items-start gap-3">
            <div className="mt-2 w-12 sm:w-[50px] h-12 sm:h-[50px] bg-secondary/10 border border-secondary/50 rounded-xl flex items-center justify-center">
              <FaChartLine className="text-secondary text-2xl" />
            </div>
            <div className="sm:col-span-7">
              <h2 className="text-lg font-semibold text-neutral mb-1">
                Result Driven Approach
              </h2>
              <p className="text-neutral-content text-sm">
                Our result-driven approach ensures every decision is rooted in
                measurable outcomes. By leveraging data analytics, precise
                targeting, and agile strategies, we turn challenges into
                opportunities—helping you not just meet but exceed your goals.
              </p>
            </div>
          </div>
        </div>

        <div>
          <Image
            src="/whychoose.jpeg"
            alt="whychoose"
            width={500}
            height={500}
            className="w-[77%] sm:h-[520px] mx-auto md:mr-auto rounded-tl-[120px] rounded-br-[120px] rounded-tr-xl rounded-bl-xl object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
