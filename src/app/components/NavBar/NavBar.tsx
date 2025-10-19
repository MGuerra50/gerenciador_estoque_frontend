"use client";

import { MenuItem, menuItems } from "@/app/config/menu";
import { menuIcons } from "@/app/config/menuIcons";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname() ?? "/";
  return (
    <nav>
      <ul>
        {menuItems.map((item: MenuItem) => {
          const Icon = menuIcons[item.icon as keyof typeof menuIcons];
          const isActive =
            pathname === item.href ||
            (pathname.startsWith(item.href) && pathname.endsWith("/"));
          return (
            <li
              key={item.href}
              className="text-white flex items-center rounded-full hover:bg-gradient-to-r from-bg-neutral-900 to-gray-700"
            >
              {isActive && (
                <div className="absolute w-[4px] h-[58px] bg-white rounded-r-md group-hover:bg-white opacity-85 transition-all" />
              )}
              <Link
                href={item.href}
                className="w-full hover:text-blue-100 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 pl-[40px] h-[68px]">
                  <Icon className="text-xl" />
                  <span
                    className={
                      (isActive ? "font-bold text-white " : "font-normal ") +
                      "transition-colors"
                    }
                    style={{ fontSize: '18px'}}
                  >
                    {item.label}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
