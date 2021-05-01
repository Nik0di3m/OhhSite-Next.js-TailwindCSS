import FaqCard from "./FaqCard";
const Faq = () => {
    return (
        <div className="flex justify-center">
            <section className="flex flex-col text-white p-2 bg-faqImage bg-contain w-screen bg-no-repeat min-h-screen lg:hidden">
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
            <section className="hidden mt-3 flex-col lg:flex">
                <div className="text-center">
                    <h1 className="text-5xl">
                        Jak możemy wspomóc Twój biznes?
                    </h1>
                </div>
                <div className="flex mt-3 max-w-[90vw] flex-wrap justify-center">
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
        </div>
    );
};

export default Faq;
