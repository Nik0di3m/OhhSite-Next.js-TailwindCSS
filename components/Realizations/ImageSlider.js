import {
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import next from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const [current1, setCurrent1] = useState(1);
    const [current2, setCurrent2] = useState(1);
    const length = slides.length;

    const nextSilde = () => {
        setCurrent(
            current === length - 1 ? 0 : current + 1
        );
        setCurrent1(current1 === length - 1 ? 0 : current);
        setCurrent2(
            current2 === length - 1 ? 2 : current + 2
        );
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return 1;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSilde();
        }, 4000);

        return () => clearInterval(interval);
    });
    return (
        <div className="flex relative items-center w-[95vw] lg:flex lg:mt-6">
            <div className="flex relative justify-center items-center overflow-x-auto h-52 w-[95vw] text-[#24cee5] lg:h-[50vh] sm:h-[50vh] lg:max-w-6xl lg:mt-6">
                {slides.map((slide, index) => {
                    return (
                        <div
                            className={`${
                                index === current - 1
                                    ? "transition-all duration-1000 opacity-70"
                                    : "transition-all duration-[1000] opacity-0"
                            }`}
                            key={index}
                        >
                            {index === current1 && (
                                <img
                                    src={slide.image}
                                    layout="fill"
                                    objectFit="contain"
                                    alt="content"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
            <div className="flex lg:absolute lg:top-0 lg:left-[20%] z-20">
                <div className="flex relative mt-4 shadow-strong overflow-hidden justify-center items-center overflow-x-auto h-52 w-[95vw] text-[#24cee5] lg:h-[52vh] sm:h-[50vh] lg:max-w-6xl">
                    {slides.map((slide, index) => {
                        return (
                            <div
                                className={`${
                                    index === current
                                        ? "transition-all duration-2000 scale-110"
                                        : "transition-all duration-2000 opacity-0"
                                }`}
                                key={index}
                            >
                                {index === current && (
                                    <img
                                        src={slide.image}
                                        layout="fill"
                                        objectFit="contain"
                                        alt="content"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="hidden lg:flex relative justify-center items-center overflow-x-auto h-52 w-[95vw] text-[#24cee5] lg:h-[50vh] sm:h-[50vh] lg:max-w-6xl lg:mt-6">
                {slides.map((slide, index) => {
                    return (
                        <div
                            className={`${
                                index === current2
                                    ? "transition-all duration-1000 scale-110 opacity-70"
                                    : "transition-all duration-1000 opacity-0"
                            }`}
                            key={index}
                        >
                            {index === current2 && (
                                <img
                                    src={slide.image}
                                    layout="fill"
                                    objectFit="contain"
                                    alt="content"
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ImageSlider;
