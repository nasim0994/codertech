import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    <section className="py-1">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 bg_gradient rounded-xl text-base-100 p-4 md:p-14">
          <div className="rounded overflow-hidden">
            <h2 className="text-3xl font-semibold">Contact Us</h2>
            <p className="mt-3 text-gray-300 text-sm">
              Thank you for interest in our service. Please fil up the form
              below or email us.
            </p>
            <div className="mt-8 flex flex-col gap-3 text-gray-300 text-[15px]">
              <div className="flex items-center gap-2">
                <p>
                  <FiPhone />
                </p>
                <p>+880 1531-714355</p>
              </div>

              <div className="flex items-center gap-2">
                <p>
                  <FaWhatsapp />
                </p>
                <p>+880 1531-714355</p>
              </div>

              <div className="flex items-center gap-2">
                <p>
                  <MdOutlineMail />
                </p>
                <p>codertechltd@gmail.com</p>
              </div>

              <div className="flex items-center gap-2">
                <p>
                  <IoLocationOutline />
                </p>
                <p>
                    Plot 98/100, Road 10, Block C, Niketan, Dhaka 1212
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h2>Follow Us</h2>
              <div className="mt-3 flex items-center gap-3">
                <Link href={"https://www.facebook.com/codertechltd"} target="_blank">
                  <FaFacebook className="text-2xl" />
                </Link>
                <Link href={"https://www.instagram.com/codertechltd"} target="_blank">
                  <RiInstagramFill className="text-[27px]" />
                </Link>
                <Link href={"https://www.linkedin.com/company/codertechltd"} target="_blank">
                  <FaLinkedin className="text-2xl" />
                </Link>
                <Link href={"https://www.youtube.com/@codertechltd"} target="_blank">
                  <FaYoutube className="text-[28px]" />
                </Link>
                  <Link href={"https://x.com/codertechltd"} target="_blank">
                  <FaXTwitter className="text-2xl" />
                </Link>
              </div>
            </div>
          </div>

          <div className="p-4 bg-base-100 rounded-xl">
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
      </div>
    </section>
  );
}
