import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/outline";
import SidebarItems from "./SidebarItems";
import SidebarDropdown from "./SidebarDropdown";
import { DropItems } from "./fakedb";
const Sidebar = ({ open, toggle }) => {
    return (
        <nav
            className={`${
                open
                    ? "transform opacity-100 top-0"
                    : "transform opacity-0 -top-full"
            } transition duration-200 ease-in-out bg-sidebarLogo bg-center bg-contain bg-no-repeat bg-white fixed w-screen h-screen z-50 text-black dark:bg-[#1d1d1d] dark:text-white`}
        >
            <div className="relative p-5">
                <div onClick={toggle}>
                    <XCircleIcon className="h-9 absolute top-4 right-4 text-black dark:text-white" />
                </div>
            </div>
            <div className="flex flex-col border-white items-center justify-between h-[90%]">
                <SidebarItems text="O nas" link="/o-nas" />
                <SidebarItems
                    text="Projektowanie stron WWW"
                    link="/projektowanie-stron-www"
                />
                <SidebarDropdown
                    text="Reklama w internecie"
                    items={DropItems}
                />
                <SidebarItems
                    text="Współpraca"
                    link="/wspolpraca"
                />
                <SidebarItems
                    text="Dodatkowe usługi"
                    link="/dodatkowe-uslugi"
                />
                <SidebarItems
                    text="Grafika"
                    link="/grafika"
                />
                <SidebarItems
                    text="Realizacje"
                    link="/realizacje"
                />
                <SidebarItems
                    text="Cennik"
                    link="/cennik"
                />
                <SidebarItems
                    text="Kontakt"
                    link="/kontakt"
                />
            </div>
        </nav>
    );
};

export default Sidebar;
