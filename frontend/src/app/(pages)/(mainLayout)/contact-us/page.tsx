import { FiPhone } from "react-icons/fi";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import WhyChooseCom from "@/components/shared/main/WhyChooseCom";
import CtaCom from "@/components/shared/main/CtaCom";

export const metadata = {
    title: "Contact Us | CoderTech",
    description: "We help businesses grow with modern software, web, and marketing solutions. Partner with CoderTech for your digital transformation.",
};

export default function ContactPage() {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid md:grid-cols-2 items-start gap-20">
          <div>
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="mt-3 text-neutral-content text-sm">
              Thank you for interest in our service. Please fil up the form
              below or email us.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-neutral-content text-[15px]">
              <div className="flex items-center gap-2">
                <p>
                  <FiPhone />
                </p>
                <p>01711270465</p>
              </div>

              <div className="flex items-center gap-2">
                <p>
                  <FaWhatsapp />
                </p>
                <p>+8801711270465</p>
              </div>

              <div className="flex items-center gap-2">
                <p>
                  <MdOutlineMail />
                </p>
                <p>emanagerit@gmail.com</p>
              </div>

              <div className="flex items-center gap-2">
                <p>
                  <IoLocationOutline />
                </p>
                <p>
                  House:- 05, Road:- 2/D, Block:- J , Baridhara, Gulshan,
                  Dhaka-1212, Bangladesh.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h2>Follow Us</h2>
              <div className="mt-3 flex items-center gap-3 text-neutral-content">
                <Link href={""} className={"hover:text-secondary duration-300"}>
                  <FaFacebook className="text-2xl" />
                </Link>
                <Link href={""} className={"hover:text-secondary duration-300"}>
                  <RiInstagramFill className="text-[27px]" />
                </Link>
                <Link href={""} className={"hover:text-secondary duration-300"}>
                  <FaLinkedin className="text-2xl" />
                </Link>
                <Link href={""} className={"hover:text-secondary duration-300"}>
                  <FaYoutube className="text-[28px]" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <form className="flex flex-col gap-4">
              <h2 className="text-[22px] font-semibold text-primary">
                Get In Touch
              </h2>
              <input type="text" placeholder="Enter Name" />
              <input type="text" placeholder="Enter Number" />
              <input type="text" placeholder="Enter Subject" />
              <textarea rows={4} placeholder="Type Message..."></textarea>
              <button className="primary_btn">Send Message</button>
            </form>
          </div>
        </div>

        <div className={"mt-20"}>
          <WhyChooseCom />
        </div>
        <div className={"mt-20"}>
          <CtaCom />
        </div>
      </div>
    </section>
  );
}
