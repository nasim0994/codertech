import { GiDuration } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { SiTextpattern } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";

export default function AboutCom() {
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="order-2 md:order-1">
        <p className="text-primary italic">-About Us-</p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-neutral mt-2">
            Empowering Businesses with Innovative Software and Digital Marketing Solutions: Introducing CoderTech
        </h2>
        <div className="mt-4 text-neutral-content text-[15px] flex flex-col gap-4">
          <p>
              Welcome to CoderTech, where we redefine excellence in software and digital marketing solutions, proudly serving the vibrant business landscape of Bangladesh. As a trusted industry leader, we are dedicated to delivering unparalleled results through a blend of creativity, technical prowess, and unwavering commitment to our clients success.
          </p>
          <p>
              At CoderTech, our team comprises seasoned professionals meticulously selected for their expertise in software development, design, and digital marketing strategy. With a focus on integrity and innovation, we craft bespoke solutions tailored to meet the unique needs of each client, ensuring maximum impact and sustainable growth.
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 border border-secondary/50 bg-primary/20 text-primary rounded flex justify-center items-center">
              <GiDuration className="text-3xl" />
            </div>
            <div>
              <h2 className="text-bold text-xl">5+</h2>
              <p className="text-neutral-content text-sm">Successful Years</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12  border border-secondary/50 bg-primary/20 text-primary rounded flex justify-center items-center">
              <FaUsers className="text-2xl" />
            </div>
            <div>
              <h2 className="text-bold text-xl">600+</h2>
              <p className="text-neutral-content text-sm">Happy Clients</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12  border border-secondary/50 bg-primary/20 text-primary rounded flex justify-center items-center">
              <SiTextpattern className="text-2xl" />
            </div>
            <div>
              <h2 className="text-bold text-xl">30+</h2>
              <p className="text-neutral-content text-sm">IT Professionals</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12  border border-secondary/50 bg-primary/20 text-primary rounded flex justify-center items-center">
              <BiSupport className="text-2xl" />
            </div>
            <div>
              <h2 className="text-bold text-xl">24/7</h2>
              <p className="text-neutral-content text-sm">Support</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2">
          <Link href="/contact-us" className="primary_btn">
            Contact Us
          </Link>
          <Link href="/" className="secondary_btn">
            Company Profile
          </Link>
        </div>
      </div>

      <div className="order-1 md:order-2 flex justify-center">
        <Image
          src="/about.png"
          alt="about"
          width={500}
          height={500}
          className="w-[90%] md:ml-auto"
        />
      </div>
    </div>
  );
}
