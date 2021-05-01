import { useState } from "react";

const Button = ({ text, link }) => {
    const [enable, setEnable] = useState(false);
    return (
        <div>
            <button className="bg-[#24cee5] shadow-xl text-white w-52 h-12 rounded-3xl mt-4 focus:animate-pingOne hover:animate-pulse">
                <h3>
                    <a href={link}>{text}</a>
                </h3>
            </button>
        </div>
    );
};

export default Button;
