import { MenuItem, menuItems } from "@/app/config/menu";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <ul>
        {menuItems.map((item: MenuItem) => (
          <li key={item.href} className="text-white">
            <Link
              href={item.href}
              className="hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
