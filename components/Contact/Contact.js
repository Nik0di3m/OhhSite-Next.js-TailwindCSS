import Link from "next/link";
import Button from "../Button/Button";

const Contact = ({ title, text, phone, mail }) => {
    return (
        <div className="bg-[#24cee5] flex justify-center flex-col items-center mt-6 text-center text-white p-8">
            <div>
                <h1 className="text-4xl">{title}</h1>
            </div>
            <div>
                <p className="text-lg">{text}</p>
            </div>
            <div>
                <Link href={`tel:${phone}`}>
                    <h1 className="cursor-pointer">
                        {phone}
                    </h1>
                </Link>

                <span>lub</span>
            </div>
            <div>
                <button className="bg-[#1d1d1d] shadow-button text-white w-52 h-12 rounded-3xl mt-4 focus:animate-pingOne hover:animate-pulse">
                    <h3>
                        <Link href={`mailto: ${mail}`}>
                            Napisz!
                        </Link>
                    </h3>
                </button>
            </div>
        </div>
    );
};

export default Contact;
