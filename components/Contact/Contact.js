import Link from "next/link";
import Button from "../Button/Button";

const Contact = () => {
    return (
        <div className="bg-[#24cee5] flex justify-center flex-col items-center mt-6 text-center text-white p-8">
            <div>
                <h1 className="text-4xl">
                    Zainteresowany?
                </h1>
            </div>
            <div>
                <p className="text-lg">
                    Jesteśmy do Twojej dyspozycji. Jeżeli
                    masz jakiekolwiek pytania lub chciałbyś
                    poznać wycenę zadzwoń.
                </p>
            </div>
            <div>
                <h1>987 654 321</h1>

                <span>lub</span>
            </div>
            <div>
                <button className="bg-[#1d1d1d] shadow-button text-white w-52 h-12 rounded-3xl mt-4 focus:animate-pingOne hover:animate-pulse">
                    <h3>
                        <Link href="mailto: asd@asd.pl">
                            Napisz!
                        </Link>
                    </h3>
                </button>
            </div>
        </div>
    );
};

export default Contact;
