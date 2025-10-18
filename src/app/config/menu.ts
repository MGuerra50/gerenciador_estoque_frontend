export type MenuItem = {
    label: string;
    href: string;
};

export const menuItems: MenuItem[] = [
    {
        label: "Dashboard",
        href: "/",
    },
    {
        label: "Purchase Order",
        href: "/purchase-order",
    },
    {
        label: "Products",
        href: "/products",
    },
    {
        label: "Warehouses",
        href: "/warehouses",
    },
    {
        label: "Reports",
        href: "/reports",
    },
    {
        label: "Collaborators",
        href: "/collaborators",
    },
    {
        label: "Settings",
        href: "/settings",
    }
];