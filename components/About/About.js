import Image from "next/image";
import Button from "../Button/Button";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import { useEffect, useState } from "react";
const anim = {
    hidden: {
        opacity: 1,
        pathLength: 0,
        x: -2000,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 2,
            ease: "easeInOut",
        },
    },
};

const About = ({ bigtitle, smalltitle, text }) => {
    const [enable, setEnable] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        if (position >= 1000) {
            setEnable(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    });
    return (
        <motion.div
            className="flex mt-20"
            variants={anim}
            initial="hidden"
            animate={enable ? "visible" : ""}
        >
            <section className="flex flex-col items-center justify-center bg-[#ededed] p-8 text-center dark:bg-[#0f0f0f] lg:max-w-[50vw]">
                <div>
                    <h1 className=" lg:text-6xl">
                        {bigtitle}
                    </h1>
                    <h1 className="lg:text-4xl">
                        {smalltitle}
                    </h1>
                </div>
                <div
                    className="text-justify mt-3"
                    dangerouslySetInnerHTML={{
                        __html: text,
                    }}
                ></div>
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
        </motion.div>
    );
};

export default About;
