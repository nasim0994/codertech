import Image from "next/image";
import Link from "next/link";
import { BarChart2, Rocket, ShieldCheck } from "lucide-react";
import { IoTelescopeOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

export default function CtaCom() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral mb-4 relative">
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
          Custom software & result-driven marketing solutions — made for your
          success.
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

      <div className="flex md:justify-end">
        <div className="space-y-4 text-neutral-content">
          <div className="md:w-max flex items-center gap-3 px-4 py-3 rounded-md shadow-sm border">
            <span>
              <ShieldCheck width={20} height={20} />
            </span>
            <span>Secure, scalable software solutions</span>
          </div>

          <div className="ml-6 md:w-max flex items-center gap-3 px-4 py-3 rounded-md shadow-sm border">
            <span>
              <Rocket width={20} height={20} />
            </span>
            <span>Grow faster with our tech & marketing power.</span>
          </div>

          <div className="ml-8 md:w-max flex items-center gap-3 px-4 py-3 rounded-md shadow-sm border">
            <span>
              <IoTelescopeOutline />
            </span>
            <span>Turn your vision into scalable software.</span>
          </div>

          <div className="ml-6 md:w-max flex items-center gap-3 px-4 py-3 rounded-md shadow-sm border">
            <span>
              <BarChart2 />
            </span>
            <span>Proven growth system</span>
          </div>

          <div className="md:w-max flex items-center gap-4 px-4 py-3 rounded-md shadow-sm border">
            <span>
              <BiSupport className="text-xl" />
            </span>
            <span>24/7 Support & Client Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
}
