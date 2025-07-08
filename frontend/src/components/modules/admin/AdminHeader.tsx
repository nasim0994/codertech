import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { TbWorldWww } from "react-icons/tb";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface AdminHeaderProps {
  setSidebar: Dispatch<SetStateAction<boolean>>;
}

export default function AdminHeader({ setSidebar }: AdminHeaderProps) {
  return (
    <header className="bg-base-100 px-6 py-3 text-neutral shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSidebar(true)}
            className="admin_sidebar_btn lg:hidden"
          >
            <HiOutlineMenuAlt2 className="text-xl" />
          </button>
          <div className="flex items-center text-[15px]">
            <Link href="/" target="_blank" title="visit front-end">
              <TbWorldWww className="text-xl sm:text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
