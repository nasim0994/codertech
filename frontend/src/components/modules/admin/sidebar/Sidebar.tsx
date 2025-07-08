import { FaBloggerB } from "react-icons/fa";
import { MdOutlineCategory } from "react-icons/md";
import { FcBusinessContact } from "react-icons/fc";
import { FaUserGraduate } from "react-icons/fa";
import { VscLightbulbAutofix } from "react-icons/vsc";
import { BsFillWrenchAdjustableCircleFill } from "react-icons/bs";
import { DiTechcrunch } from "react-icons/di";
import Link from "next/link";
import { BiCategory } from "react-icons/bi";
import { BsBoxes } from "react-icons/bs";
import { CgSearchFound } from "react-icons/cg";
import { MdOutlineSettings } from "react-icons/md";

import SidebarItems from "./SidebarItems";
import Image from "next/image";
import { ISidebarItem } from "@/interface/sidebarInterface";

const adminSidebarItems: ISidebarItem[] = [
  {
    menu: [
      {
        icon: <BiCategory />,
        title: "Dashboard",
        path: "/admin/dashboard",
      },
    ],
  },
  {
    title: "Project & Technology",
    menu: [
      {
        icon: <BsBoxes />,
        title: "Projects",
        path: "/admin/project/all",
      },
      {
        icon: <DiTechcrunch />,
        title: "Technologies",
        path: "/admin/technology/all",
      },
    ],
  },
  {
    title: "Experince & Skill",
    menu: [
      {
        icon: <BsFillWrenchAdjustableCircleFill />,
        title: "Experinces",
        path: "/admin/experince/all",
      },
      {
        icon: <VscLightbulbAutofix />,
        title: "Skills",
        path: "/admin/skill/all",
      },
    ],
  },
  {
    title: "About & Contact",
    menu: [
      {
        icon: <FaUserGraduate />,
        title: "About",
        path: "/admin/about",
      },
      {
        icon: <FcBusinessContact />,
        title: "Contact",
        path: "/admin/contact",
      },
    ],
  },
  {
    title: "Blog",
    menu: [
      {
        icon: <MdOutlineCategory />,
        title: "Categories",
        path: "/admin/blog/category/all",
      },
      {
        icon: <FaBloggerB />,
        title: "Blogs",
        path: "/admin/blog/all",
      },
    ],
  },
  {
    title: "Setting",
    menu: [
      {
        icon: <MdOutlineSettings />,
        title: "Settings",
        path: "/admin/settings",
      },
    ],
  },
  {
    title: "SEO",
    menu: [
      {
        icon: <CgSearchFound />,
        title: "SEO",
        path: "/admin/seo",
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="sidebar_menu">
        <Link
          href="/admin/dashboard"
          className="block border-b py-1 text-center text-secondary"
        >
          <h2 className="text-3xl font-semibold">Nasim Uddin</h2>
        </Link>

        <nav className="admin_sidebar_item flex flex-col gap-3">
          {adminSidebarItems?.map((item, i) => (
            <ul key={i}>
              <h3 className="pb-2 text-[13px] uppercase text-neutral/60">
                {item?.title}
              </h3>
              {item?.menu?.map((menu, i) => (
                <SidebarItems key={i} item={menu} />
              ))}
            </ul>
          ))}
        </nav>
      </div>

      <div className="border-t py-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/images/demo_user.jpg"
              alt="user"
              className="h-8 w-8 rounded-full"
              width={50}
              height={50}
            />
            <div>
              <h3 className="font-medium">Nuaim Hasan</h3>
              <p className="-mt-px text-xs text-neutral-content">Role</p>
            </div>
          </div>

          <button className="rounded bg-red-100 px-3 pb-2 pt-1 text-[13px] text-red-500 duration-300 hover:bg-red-500 hover:text-base-100">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
