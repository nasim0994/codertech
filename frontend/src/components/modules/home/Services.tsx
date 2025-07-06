import "../../../assets/styles/Services.css";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const services = [
  {
    _id: 1,
    title: "Web Development",
    slug: "web-development",
    description:
      "Bangladesh has now become an emerging potential of high quality IT Services. Where lots of companies are serving web Development services.",
    icon: "/services/web.webp",
  },
  {
    _id: 2,
    title: "App Development",
    slug: "app-development",
    description:
      "Bangladesh has now become an emerging potential of high quality IT Services. Where lots of companies are serving web Development services.",
    icon: "/services/web.webp",
  },
  {
    _id: 3,
    title: "Digital Marketing",
    slug: "digital-marketing",
    description:
      "Bangladesh has now become an emerging potential of high quality IT Services. Where lots of companies are serving web Development services.",
    icon: "/services/web.webp",
  },
  {
    _id: 4,
    title: "Videography Solution",
    slug: "videography-solution",
    description:
      "Bangladesh has now become an emerging potential of high quality IT Services. Where lots of companies are serving web Development services.",
    icon: "/services/web.webp",
  },
  {
    _id: 5,
    title: "UI-UX Design",
    slug: "web-development",
    description:
      "Bangladesh has now become an emerging potential of high quality IT Services. Where lots of companies are serving web Development services.",
    icon: "/services/web.webp",
  },
  {
    _id: 6,
    title: "Graphics Design",
    slug: "app-development",
    description:
      "Bangladesh has now become an emerging potential of high quality IT Services. Where lots of companies are serving web Development services.",
    icon: "/services/web.webp",
  },
  {
    _id: 7,
    title: "Content & Research",
    slug: "digital-marketing",
    description:
      "Bangladesh has now become an emerging potential of high quality IT Services. Where lots of companies are serving web Development services.",
    icon: "/services/web.webp",
  },
  {
    _id: 8,
    title: "Domain & Hosting",
    slug: "videography-solution",
    description:
      "Bangladesh has now become an emerging potential of high quality IT Services. Where lots of companies are serving web Development services.",
    icon: "/services/web.webp",
  },
];

export default function Services() {
  return (
    <section className="pb-10">
      <div className="container">
        <div className="text-center flex flex-col items-center justify-center md:w-3/5 mx-auto">
          <h1 className="text-4xl font-bold text-secondary">Our Services</h1>
          <p className="mt-3 text-[15px] text-neutral-content">
            We are committed to digitalizing your business. We provide
            Integrated marketing company that delivers graphics, web, and
            marketing solutions for businesses.
          </p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4 items-start">
          {services?.map((service, index) => (
            <Link
              key={service?._id}
              href="/"
              className={`service_card ${index == 0 && "active"}`}
            >
              <Image
                src={service?.icon}
                alt={service?.title}
                className="w-14 h-14"
                width={50}
                height={50}
              />
              <div>
                <h2 className="text-2xl font-medium mb-2 mt-5">
                  {service?.title}
                </h2>
                <p className="text-[15px]">
                  {service?.description?.length > 100
                    ? service?.description?.slice(0, 100) + "..."
                    : service?.description}
                </p>
                <button className="mt-3 text-base-100 text-sm flex items-center gap-1">
                  Read More <GoArrowUpRight />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
