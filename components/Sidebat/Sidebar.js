import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/outline";
const Sidebar = ({ open, toggle }) => {
    return (
        <div
            className={`${
                open
                    ? "transform opacity-100 top-0"
                    : "transform opacity-0 -top-full"
            } transition duration-200 ease-in-out bg-white fixed w-screen h-screen z-50 text-black dark:bg-[#1d1d1d] dark:text-white`}
        >
            <div className="relative p-5">
                <div onClick={toggle}>
                    <XCircleIcon className="h-9 absolute top-4 right-4 text-black dark:text-white" />
                </div>
            </div>
            <div className="flex border-white items-center justify-center">
                asdasdasd
            </div>
        </div>
    );
};

export default Sidebar;
