import { ShieldCheck, Rocket, BarChart2 } from "lucide-react";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import { IoTelescopeOutline } from "react-icons/io5";
import Image from "next/image";

export default function Cta() {
  return (
    <section className="py-10 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-4 relative">
              <Image
                src="/text_bg.png"
                alt="text_bg"
                width={200}
                height={200}
                className="absolute -top-4 -left-10 z-10"
              />
              <span className="relative z-20">
                Reimagine your business solutions today.
              </span>
            </h2>
            <p className="text-gray-700 mb-6">
              Custom software & result-driven marketing solutions — made for
              your success.
            </p>
            <div>
              <Link
                href=""
                className="bg_gradient px-6 py-2 rounded-full text-sm text-base-100"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="space-y-4 text-neutral-content">
              <div className="w-max flex items-center gap-3 px-4 py-3 rounded-md shadow-sm border">
                <span>
                  <ShieldCheck width={20} height={20} />
                </span>
                <span>Secure, scalable software solutions</span>
              </div>

              <div className="ml-6 w-max flex items-center gap-3 px-4 py-3 rounded-md shadow-sm border">
                <span>
                  <Rocket width={20} height={20} />
                </span>
                <span>Grow faster with our tech & marketing power.</span>
              </div>

              <div className="ml-8 w-max flex items-center gap-3 px-4 py-3 rounded-md shadow-sm border">
                <span>
                  <IoTelescopeOutline />
                </span>
                <span>Turn your vision into scalable software.</span>
              </div>

              <div className="ml-6 w-max flex items-center gap-3 px-4 py-3 rounded-md shadow-sm border">
                <span>
                  <BarChart2 />
                </span>
                <span>Proven growth system</span>
              </div>

              <div className="w-max flex items-center gap-4 px-4 py-3 rounded-md shadow-sm border">
                <span>
                  <BiSupport className="text-xl" />
                </span>
                <span>24/7 Support & Client Updates</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
