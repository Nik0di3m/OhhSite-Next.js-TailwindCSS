import Image from "next/image";
import FaqCard from "./FaqCard";
const Faq = ({ title, text1, text2, text3, text4 }) => {
    return (
        <div className="flex flex-row-reverse lg:bg-[#ededed] lg:dark:bg-[#0f0f0f]">
            <section className="flex flex-col text-white p-2 bg-faqImage bg-cover w-screen bg-no-repeat lg:hidden">
                <div className="lg:hidden">
                    <div className="">
                        <h1>{title}</h1>
                    </div>
                    <ul>
                        <li className="mt-2">
                            <h3>1. {text1}</h3>
                        </li>
                        <li className="mt-2">
                            <h3>2. {text2}</h3>
                        </li>
                        <li className="mt-2">
                            <h3>3. {text3}</h3>
                        </li>
                        <li className="mt-2">
                            <h3>4. {text4}</h3>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="hidden flex-col justify-center items-center lg:flex">
                <div className="flex flex-row-reverse">
                    <div className="flex flex-row mt-3 max-w-[50vw] flex-wrap justify-center">
                        <div className="flex justify-end">
                            <h1 className="text-5xl">
                                {title}
                            </h1>
                        </div>
                        <FaqCard number="1" text={text1} />
                        <FaqCard number="2" text={text2} />
                        <FaqCard number="3" text={text3} />
                        <FaqCard number="4" text={text4} />
                    </div>

                    <div className="hidden max-w-[50%] lg:flex">
                        <Image
                            src="/themes/faq/faq_desktop.jpg"
                            width={1618}
                            height={1080}
                            alt="Rozkręcimy Twój biznes w internecie"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
