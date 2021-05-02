import Image from "next/image";
import FaqCard from "./FaqCard";
const Faq = () => {
    return (
        <div className="flex flex-row-reverse lg:bg-[#ededed] lg:dark:bg-[#0f0f0f]">
            <section className="flex flex-col text-white p-2 bg-faqImage bg-cover w-screen bg-no-repeat lg:hidden">
                <div className="lg:hidden">
                    <div className="">
                        <h1>
                            Jak możemy wspomóc Twój biznes?
                        </h1>
                    </div>
                    <ul>
                        <li className="mt-2">
                            <h3>
                                1. Lorem ipsum dolor sit
                                amet, consectetur adipiscing
                                elit. Vestibulum purus erat,
                                pharetra quis dui eu
                            </h3>
                        </li>
                        <li className="mt-2">
                            <h3>
                                2. Lorem ipsum dolor sit
                                amet, consectetur adipiscing
                                elit. Vestibulum purus erat,
                                pharetra quis dui eu
                            </h3>
                        </li>
                        <li className="mt-2">
                            <h3>
                                3. Lorem ipsum dolor sit
                                amet, consectetur adipiscing
                                elit. Vestibulum purus erat,
                                pharetra quis dui eu
                            </h3>
                        </li>
                        <li className="mt-2">
                            <h3>
                                4. Lorem ipsum dolor sit
                                amet, consectetur adipiscing
                                elit. Vestibulum purus erat,
                                pharetra quis dui eu
                            </h3>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="hidden mt-3 flex-col justify-center items-center lg:flex">
                <div className="text-center">
                    <h1 className="text-5xl">
                        Jak możemy wspomóc Twój biznes?
                    </h1>
                </div>
                <div className="flex mt-3 max-w-[50vw] flex-wrap justify-center">
                    <FaqCard
                        number="1"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper dolor vitae orci luctus, eu venenatis nulla placerat. Ut tempus tellus arcu, eu feugiat augue euismod at. Curabitur at convallis magna."
                    />
                    <FaqCard
                        number="2"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper dolor vitae orci luctus, eu venenatis nulla placerat. Ut tempus tellus arcu, eu feugiat augue euismod at. Curabitur at convallis magna."
                    />
                    <FaqCard
                        number="3"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper dolor vitae orci luctus, eu venenatis nulla placerat. Ut tempus tellus arcu, eu feugiat augue euismod at. Curabitur at convallis magna."
                    />
                    <FaqCard
                        number="4"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper dolor vitae orci luctus, eu venenatis nulla placerat. Ut tempus tellus arcu, eu feugiat augue euismod at. Curabitur at convallis magna."
                    />
                </div>
            </section>
            <div className="hidden max-w-[50%] lg:flex">
                <Image
                    src="/themes/faq/faq_desktop.jpg"
                    width={1618}
                    height={1080}
                    alt="Rozkręcimy Twój biznes w internecie"
                />
            </div>
        </div>
    );
};

export default Faq;
