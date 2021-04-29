import Image from "next/image";
import { useTheme } from "next-themes";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Sidebar from "../Sidebat/Sidebar";
import MenuItemsLg from "./MenuItemsLg";

const Header = () => {
    const { theme, setTheme } = useTheme();
    const [enable, setEnable] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    const themeHendler = () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setEnable(!enable);
    };

    const toggle = () => {
        setMobileMenu(!mobileMenu);
    };
    return (
        <nav className="fixed w-screen z-10 flex-col items-center justify-between bg-[#1d1d1d] bg-opacity-80 text-white">
            <Sidebar open={mobileMenu} toggle={toggle} />
            <div className="flex items-center justify-between p-2">
                <div>
                    <Image
                        src="/themes/logo.svg"
                        width={150}
                        height={50}
                    />
                </div>
                <div>
                    <div
                        className="transition duration-200 ease-in  h-5 w-20 p-2 rounded-xl shadow-inner flex items-center bg-[#1d1d1d] dark:bg-[#24cee5]"
                        onClick={themeHendler}
                    >
                        <div
                            className={`${
                                enable
                                    ? "transform translate-x-12"
                                    : "transform translate-x-0 animate-pulse"
                            } transition duration-200 ease-in bg-white h-4 w-4 rounded-full shadow`}
                        ></div>
                    </div>
                </div>
                <div
                    className="lg:hidden"
                    onClick={() => {
                        setMobileMenu(!mobileMenu);
                    }}
                >
                    <MenuIcon className="h-8 mb-1 text-white " />
                </div>
                <div className="hidden lg:flex">
                    <MenuItemsLg
                        items="O nas"
                        link="/o-nas"
                    />
                    <MenuItemsLg
                        items="Projektowanie stron www"
                        link="/projektowanie-stron-www"
                    />
                    <MenuItemsLg
                        items="Reklama w internecie"
                        link="/reklama-w-internecie"
                    />
                    <MenuItemsLg
                        items="Współpraca"
                        link="/wspolpraca"
                    />
                    <MenuItemsLg
                        items="Dodatkowe usługi"
                        link="/dodatkowe-uslugi"
                    />
                    <MenuItemsLg
                        items="Grafika"
                        link="/grafika"
                    />
                    <MenuItemsLg
                        items="Realizacje"
                        link="/realizacje"
                    />
                    <MenuItemsLg
                        items="Cennik"
                        link="cennik"
                    />
                    <MenuItemsLg
                        items="Kontakt"
                        link="kontakt"
                    />
                </div>
            </div>
        </nav>
    );
};

export default Header;

<button
    onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
    }
>
    Click Me
</button>;
