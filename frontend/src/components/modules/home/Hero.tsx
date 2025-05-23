import { SiLaravel } from "react-icons/si";
import "@/assets/styles/hero.css";
import { FaReact } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero_wrap -mt-20 relative">
      <div className="container relative z-20">
        <div className="pt-40 lg:pt-32 pb-24 sm:pb-40">
          <div className="xl:mx-32 text-center relative flex flex-col items-center justify-center">
            {/* icon */}
            <div>
              <div className="topright_icon">
                <FaReact className="text-xl text-gray-300" />
              </div>

              <div className="bottomleft_icon">
                <SiLaravel className="text-xl text-gray-300" />
              </div>
            </div>

            <h3 className="w-max rounded-xl bg-base-100/10 px-3 py-1 text-xs text-base-100">
              MERN/PERN Stack Developer
            </h3>

            <h2 className="my-4 text-2xl font-bold sm:text-5xl">
              We are experienced, you will definitely win. Manage your business
              like a pro
            </h2>

            <p className="text-sm text-gray-400">
              eManager is a leading digital solutions company, specializing in
              website and app development, software development, and total
              digital marketing strategies. We are committed to helping
              businesses establish a strong online presence and achieve their
              digital goals.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/contact-us"
                className="text-sm border rounded-full px-5 py-1.5 bg-secondary border-primary duration-300"
              >
                Let&apos;s discuss your project
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute w-full left-0 -bottom-[1px]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff " fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>
    </section>
  );
}
