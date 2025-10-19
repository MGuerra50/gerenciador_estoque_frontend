"use client";

import { MenuItem } from "@/app/config/menu";
import useActiveRoute from "@/app/hooks/useActiveRoute";
import WidgetsBase from "../WidgetsBase/WidgetsBase";
import { LuNewspaper } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";

export default function ActiveWidget({ items }: { items: MenuItem[] }) {
  const { activeItem } = useActiveRoute(items);
  if (!activeItem) return null;

  return (
    <WidgetsBase>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "83% 1fr 1fr 1fr",
          alignItems: 'center'
        }}
      >
        <span className="font-bold text-[26px]">{activeItem.label}</span>

        <LuNewspaper style={{ fontSize: "25px" }} />
        <IoNotificationsOutline style={{ fontSize: "25px" }} />
        <div style={{display:'inline-grid', justifyContent: 'center'}} className="rounded-full border-2 border-solid h-[39px] w-[39px] bg-gray-400">
          <span className="w-full flex items-center">M</span>
        </div>
      </div>
    </WidgetsBase>
  );
}
