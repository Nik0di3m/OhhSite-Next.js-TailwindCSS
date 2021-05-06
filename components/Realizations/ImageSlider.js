import {
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import next from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSilde = () => {
        setCurrent(
            current === length - 1 ? 0 : current + 1
        );
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return 1;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            nextSilde();
        }, 3000);

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
                                    ? "transition-all duration-2000 opacity-70"
                                    : "transition-all duration-[2000] opacity-20"
                            }`}
                            key={index}
                        >
                            {index === current - 1 && (
                                <Image
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
                <div className="flex relative mt-4 overflow-hidden justify-center items-center overflow-x-auto h-52 w-[95vw] text-[#24cee5] lg:h-[52vh] sm:h-[50vh] lg:max-w-6xl">
                    {slides.map((slide, index) => {
                        return (
                            <div
                                className={`${
                                    index === current
                                        ? "transition-all duration-1000 scale-110"
                                        : "transition-all duration-1000 opacity-100"
                                }`}
                                key={index}
                            >
                                {index === current && (
                                    <Image
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
                                index === current + 1
                                    ? "transition-all duration-2000 scale-110 opacity-70"
                                    : "transition-all duration-2000 opacity-20"
                            }`}
                            key={index}
                        >
                            {index === current + 1 && (
                                <Image
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
