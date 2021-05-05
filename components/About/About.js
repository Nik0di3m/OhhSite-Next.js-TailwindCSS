import Image from "next/image";
import Button from "../Button/Button";

const About = ({ bigtitle, smalltitle, text }) => {
    return (
        <div className="flex mt-20">
            <section className="flex flex-col items-center justify-center bg-[#ededed] p-8 text-center dark:bg-[#0f0f0f] lg:max-w-[50vw]">
                <div>
                    <h1 className=" lg:text-6xl">
                        {bigtitle}
                    </h1>
                    <h1 className="lg:text-4xl">
                        {smalltitle}
                    </h1>
                </div>
                <div className="text-justify mt-3">
                    <p>{text}</p>
                </div>
                <Button text="Więcej!" link="/o-nas" />
                <Button text="Kontakt" link="/kontakt" />
            </section>
            <div className="hidden min-w-[50%] lg:flex">
                <Image
                    src="/themes/onas/onasmini.webp"
                    width={1618}
                    height={1080}
                    alt="Content"
                />
            </div>
        </div>
    );
};

export default About;
