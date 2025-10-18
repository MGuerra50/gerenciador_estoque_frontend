export type MenuItem = {
    label: string;
    href: string;
    icon: string;
};

export const menuItems: MenuItem[] = [
    {
        label: "Dashboard",
        href: "/",
        icon: "LuLayoutDashboard",
    },
    {
        label: "Purchase Order",
        href: "/purchase-order",
        icon: "RiNewspaperLine",
    },
    {
        label: "Products",
        href: "/products",
        icon: "LuBox",
    },
    {
        label: "Warehouses",
        href: "/warehouses",
        icon: "LiaWarehouseSolid",
    },
    {
        label: "Reports",
        href: "/reports",
        icon: "TbReportSearch",
    },
    {
        label: "Collaborators",
        href: "/collaborators",
        icon: "IoPeopleSharp",
    },
    {
        label: "Settings",
        href: "/settings",
        icon: "IoSettingsOutline",
    }
];