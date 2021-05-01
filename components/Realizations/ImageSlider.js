import {
    ArrowCircleLeftIcon,
    ArrowCircleRightIcon,
} from "@heroicons/react/outline";
import next from "next";
import Image from "next/image";
import { useState } from "react";

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSilde = () => {
        setCurrent(
            current === length - 1 ? 0 : current + 1
        );
    };
    const prevSlide = () => {
        setCurrent(
            current === 0 ? length - 1 : current - 1
        );
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <div className="flex relative border-4 dark:border-0 justify-center items-center overflow-x-auto h-52 w-[95vw] text-[#24cee5] lg:h-[50vh] sm:h-[50vh] lg:max-w-6xl lg:mt-6">
            <ArrowCircleLeftIcon
                className="h-8  absolute top-[50%] left-1 z-10 lg:h-16 hover:animate-bounce"
                onClick={prevSlide}
            />
            <ArrowCircleRightIcon
                className="h-8 absolute top-[50%] right-1 z-10 lg:h-16 hover:animate-bounce"
                onClick={nextSilde}
            />
            {slides.map((slide, index) => {
                return (
                    <div
                        className={`${
                            index === current
                                ? "transition-all duration-500 scale-110"
                                : "transition-all duration-500 opacity-0"
                        }`}
                        key={index}
                    >
                        {index === current && (
                            <Image
                                src={slide.image}
                                layout="fill"
                                objectFit="contain"
                                alt="content"
                                className="shadow-strong"
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default ImageSlider;
