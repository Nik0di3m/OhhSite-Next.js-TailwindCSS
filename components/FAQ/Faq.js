import Image from "next/image";
import FaqCard from "./FaqCard";
import { motion, LazyMotion } from "framer-motion";
import { useEffect, useState } from "react";

const drawPath = {
    hidden: {
        opacity: 0,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        pathLength: 1,
        transition: {
            duration: 1,
            ease: "easeIn",
        },
    },
};

const Faq = ({ title, text1, text2, text3, text4 }) => {
    const [enable, setEnable] = useState(false);

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
        if (position >= 1600) {
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
        <div className="flex justify-center flex-row-reverse lg:bg-[#ededed] lg:dark:bg-[#1d1d1d]">
            <section className="flex flex-col text-white p-2 lg:hidden">
                <div className="flex jusify-center items-center">
                    <div>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="147.169"
                            height="315.115"
                            viewBox="0 0 147.169 315.115"
                            variants={drawPath}
                            initial="hidden"
                            animate={
                                enable ? "visible" : ""
                            }
                        >
                            <motion.path
                                id="Path_1"
                                data-name="Path 1"
                                d="M960,605.991V711.029l-81.861,81.861h139.926L960,850.956v70.151"
                                transform="translate(-874.517 -605.991)"
                                fill="none"
                                stroke="#24cee5"
                                stroke-width="4"
                                variants={drawPath}
                            />
                        </motion.svg>
                    </div>
                </div>
            </section>
            <section className="hidden flex-col justify-center items-center lg:flex">
                <div className="flex jusify-center items-center">
                    <div>
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="147.169"
                            height="315.115"
                            viewBox="0 0 147.169 315.115"
                            variants={drawPath}
                            initial="hidden"
                            animate={
                                enable ? "visible" : ""
                            }
                            exit="after"
                        >
                            <motion.path
                                id="Path_1"
                                data-name="Path 1"
                                d="M960,605.991V711.029l-81.861,81.861h139.926L960,850.956v70.151"
                                transform="translate(-874.517 -605.991)"
                                fill="none"
                                stroke="#24cee5"
                                stroke-width="4"
                                variants={drawPath}
                            />
                        </motion.svg>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Faq;
