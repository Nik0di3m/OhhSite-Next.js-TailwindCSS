import { useState } from "react";

const Button = ({ text }) => {
    const [enable, setEnable] = useState(false);
    return (
        <div>
            <button className="bg-[#24cee5] text-white w-52 h-12 rounded-3xl mt-4 focus:animate-pingOne hover:animate-pulse">
                <h3>{text}</h3>
            </button>
        </div>
    );
};

export default Button;
