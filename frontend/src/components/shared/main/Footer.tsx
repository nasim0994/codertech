import "@/assets/styles/footer.css";
import Image from "next/image";
import Link from "next/link";
import CircularProgress from "./ProgressScroll";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import {FaXTwitter} from "react-icons/fa6";
import {services} from "@/assets/data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer_wrap">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href={"/"}>
              <Image width={230} height={200} src="/logo-white.png" alt="logo" />
            </Link>
            <p className="mt-3 text-gray-300 text-sm sm:pr-24">
                CoderTech is a Leading Software & Digital Marketing Solution Company in Bangladesh.
            </p>
            <div className="mt-8">
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
          <div>
            <h2 className="font-semibold text-2xl">Services</h2>
            <ul className="mt-4 text-sm text-gray-300 flex flex-col gap-3">
                {
                    services?.map((service) => (
                        <li key={service?._id}>
                            {service?.title}
                        </li>
                    ))
                }
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-2xl">Quick Link</h2>
            <ul className="mt-4 text-sm text-gray-300 flex flex-col gap-3">
              <li>
                <Link href={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link href={"/contact-us"}>Contact Us</Link>
              </li>
              {/*<li>*/}
              {/*  <Link href={"/"}>Career</Link>*/}
              {/*</li>*/}
              <li>
                <Link href={"/blogs"}>Blogs</Link>
              </li>
              <li>
                <Link href={"/privacy-policy"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/return-policy"}>Return & Refund Policy</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold text-2xl">Contact info</h2>
            <div className="mt-4 flex flex-col gap-3 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                <p>
                  <FiPhone />
                </p>
                <p>+8801531-714355</p>
              </div>

              <div className="flex items-center gap-2">
                <p>
                  <FaWhatsapp />
                </p>
                <p>+8801531-714355</p>
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
          </div>
        </div>

        <div className={"mt-14 border-t border-gray-400 pt-5 text-center"}>
          <p className={"text-sm"}>
            Copyright ©{currentYear} eManager. All Rights Reserved.
          </p>
        </div>
      </div>

      <CircularProgress />
    </footer>
  );
}
