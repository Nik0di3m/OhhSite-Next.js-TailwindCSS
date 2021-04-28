import Image from "next/image";
import { useTheme } from "next-themes";
import { MenuIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Sidebar from "../Sidebat/Sidebar";

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
        <header className="sticky top-0 z-10 flex-col items-center justify-between bg-[#1d1d1d] bg-opacity-80 dark:text-white bg-[#1d1d1d]">
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
                                    : "transform translate-x-0"
                            } transition duration-200 ease-in bg-white h-4 w-4 rounded-full shadow`}
                        ></div>
                    </div>
                </div>
                <div
                    onClick={() => {
                        setMobileMenu(!mobileMenu);
                    }}
                >
                    <MenuIcon className="h-8 mb-1 text-white " />
                </div>
            </div>
        </header>
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
