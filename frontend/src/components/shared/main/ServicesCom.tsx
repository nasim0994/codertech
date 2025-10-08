import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import "../../../assets/styles/Services.css";
import { services } from "@/assets/data/services";

export default function ServicesCom() {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4 items-start">
      {services?.map((service, index: number) => (
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
            <h2 className="text-2xl font-medium mb-2 mt-5">{service?.title}</h2>
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
  );
}
