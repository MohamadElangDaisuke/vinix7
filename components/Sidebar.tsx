"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Briefcase, Phone, Users } from "lucide-react";

export default function Sidebar() {
  const path = usePathname();

  const menu = [
    { name: "Home", icon: Home, href: "/" },
    { name: "About", icon: Info, href: "/about" },
    { name: "Services", icon: Briefcase, href: "/services" },
    { name: "Contact", icon: Phone, href: "/contact" },
    { name: "Team", icon: Users, href: "/team" },
  ];

  return (
    <aside
      className="
        fixed md:static
        bottom-0 md:top-0
        w-full md:w-64
        h-16 md:h-screen
        bg-gradient-to-b from-[#1B5E20] to-[#2E7D32]
        text-white
        flex md:flex-col
        shadow-xl
        z-50
      "
    >

      {/* LOGO (hidden di HP biar hemat space) */}
      <div className="hidden md:flex p-6 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="font-bold">ES</span>
          </div>
          <div>
            <h2 className="text-[16px] font-bold">EduSantri</h2>
            <p className="text-xs text-white/70">Company Profile</p>
          </div>
        </div>
      </div>

      {/* MENU */}
      <nav className="flex md:flex-col flex-row justify-around md:justify-start flex-1 p-2 md:p-4 gap-1 md:space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = path === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`
                  flex flex-col md:flex-row items-center gap-1 md:gap-3
                  px-2 md:px-4 py-2 md:py-3 rounded-xl transition text-xs md:text-base
                  ${isActive
                    ? "bg-white text-[#2E7D32]"
                    : "hover:bg-white/10"
                  }
                `}
              >
                <Icon size={18} />
                <span className="hidden md:block">{item.name}</span>
              </div>
            </Link>
          );
        })}

      </nav>

      {/* FOOTER SIDEBAR */}
      <div className="hidden md:block p-4 text-xs text-white/60 border-t border-white/10">
        © 2026 EduSantri
      </div>

    </aside>
  );
}
