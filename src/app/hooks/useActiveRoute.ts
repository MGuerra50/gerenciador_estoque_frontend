"use client";

import { usePathname } from "next/navigation";  
import type { MenuItem } from "../config/menu";

type Options = {
    match?: "startsWith" | "exact";
}

function normalizePath (pathname: string) {
    const cleaned = pathname.replace(/\/+$/, "");
    return cleaned === "" ? "/" : cleaned;
}

export default function useActiveRoute (items: MenuItem[], opts?: Options){
    const pathname = usePathname() ?? "/";
    const path = normalizePath(pathname);
    const match = opts?.match ?? "startsWith";

    const isMatch = (href: string)=>{
        const nh = normalizePath(href);
        if(match === "exact")return path === nh;
        if(nh === "/") return path === "/";

        return path === nh || path.startsWith(nh + "/") || path.startsWith(nh);
    }

    const activeItem = items.find((it)=> isMatch(it.href));
    return{
        pathname: path,
        activeItem,
        activeHref: activeItem?.href,
        isActive: isMatch,
    };
}