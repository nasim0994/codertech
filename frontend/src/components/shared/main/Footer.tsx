import "@/assets/styles/footer.css";
import Image from "next/image";
import Link from "next/link";
import CircularProgress from "./ProgressScroll";
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="footer_wrap">
      <div className="container">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Link href={"/"}>
              {/*<Image width={230} height={200} src="/logo.png" alt="logo" />*/}
              <h2 className={"text-3xl font-bold"}>eManager</h2>
            </Link>
            <p className="mt-3 text-gray-300 text-sm sm:pr-24">
              eManager is a Leading Software & Digital Marketing Solution
              company in Bangladesh
            </p>
            <div className="mt-8">
              <h2>Follow Us</h2>
              <div className="mt-3 flex items-center gap-3">
                <Link href={""}>
                  <FaFacebook className="text-2xl" />
                </Link>
                <Link href={""}>
                  <RiInstagramFill className="text-[27px]" />
                </Link>
                <Link href={""}>
                  <FaLinkedin className="text-2xl" />
                </Link>
                <Link href={""}>
                  <FaYoutube className="text-[28px]" />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold text-2xl">Services</h2>
            <ul className="mt-4 text-sm text-gray-300 flex flex-col gap-3">
              <li>
                <Link href={"/"}>Web Development</Link>
              </li>
              <li>
                <Link href={"/"}>App Development</Link>
              </li>
              <li>
                <Link href={"/"}>Digital Marketing</Link>
              </li>
              <li>
                <Link href={"/"}>UI-UX Design</Link>
              </li>
              <li>
                <Link href={"/"}>Video Editing</Link>
              </li>
              <li>
                <Link href={"/"}>UI-UX Design</Link>
              </li>
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
                <Link href={"/"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"/"}>Return & Refund Policy</Link>
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
          </div>
        </div>

        <div className={"mt-14 border-t border-gray-400 pt-5 text-center"}>
          <p className={"text-sm"}>
            Copyright ©2025 eManager. All Rights Reserved.
          </p>
        </div>
      </div>

      <CircularProgress />
    </footer>
  );
}
