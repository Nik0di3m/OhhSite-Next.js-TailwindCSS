import { ChevronDoubleDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

const SidebarDropdown = ({ text, items }) => {
    const [dropItem, setDropItem] = useState([]);
    useEffect(() => {
        setDropItem(items);
    });
    const [enable, setEnable] = useState(false);
    return (
        <div
            className="flex flex-col items-center  text-center relative"
            onClick={() => setEnable(!enable)}
        >
            <div className="flex">
                <h3>
                    {enable ? (
                        <Link href="/reklama-w-internecie">
                            {text}
                        </Link>
                    ) : (
                        <div>{text}</div>
                    )}
                </h3>
                <ChevronDoubleDownIcon className="h-8 ml-2" />
            </div>
            <div
                className={`transition duration-500  ${
                    enable
                        ? "flex animate-showDrop"
                        : "animate-offDrop"
                } flex-col absolute bg-ohh top-8 p-3 rounded-lg text-white shadow-sm`}
            >
                {dropItem.map((item) => (
                    <div key={item.title}>
                        <h3>
                            <Link href={`${item.link}`}>
                                {item.title}
                            </Link>
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SidebarDropdown;
