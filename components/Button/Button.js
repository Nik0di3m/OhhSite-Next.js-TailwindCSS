import Link from "next/link";
import { useState } from "react";

const Button = ({ text, link }) => {
    const [enable, setEnable] = useState(false);
    return (
        <div>
            <button className="bg-[#24cee5] shadow-button text-white w-52 h-12 rounded-lg mt-4 focus:animate-pingOne hover:animate-pulse">
                <h3>
                    <Link href={link}>{text}</Link>
                </h3>
            </button>
        </div>
    );
};

export default Button;
