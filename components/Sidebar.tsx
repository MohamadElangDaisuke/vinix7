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
    <aside className="w-64 h-screen bg-gradient-to-b from-[#1B5E20] to-[#2E7D32] text-white fixed flex flex-col shadow-xl">
      
      <div className="p-6 border-b border-white/10">
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

      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const isActive = path === item.href;

          return (
            <Link key={item.href} href={item.href}>
              <div
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition ${
                  isActive
                    ? "bg-white text-[#2E7D32]"
                    : "hover:bg-white/10"
                }`}
              >
                <Icon size={20} />
                <span>{item.name}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 text-xs text-white/60 border-t border-white/10">
        © 2026 EduSantri
      </div>
    </aside>
  );
}
