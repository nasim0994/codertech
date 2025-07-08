"use client";
import "@/assets/styles/admin.css";
import { useEffect, useState, ReactNode } from "react";
import Sidebar from "@/components/modules/admin/sidebar/Sidebar";
import AdminHeader from "@/components/modules/admin/AdminHeader";

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    window.addEventListener("click", (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (
        (!target.closest(".admin_sidebar") &&
          !target.closest(".admin_sidebar_btn")) ||
        target.closest(".admin_sidebar ul li a")
      ) {
        setSidebar(false);
      }
    });
  }, []);

  return (
    <section className="flex">
      <aside className={`admin_sidebar ${sidebar && "admin_sidebar_show"}`}>
        <Sidebar />
      </aside>
      <div className="admin_content">
        <AdminHeader setSidebar={setSidebar} />
        <main className="py-5 sm:p-5">{children}</main>
      </div>
    </section>
  );
}
