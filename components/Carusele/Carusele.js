import Image from "next/image";
import { useEffect, useState } from "react";
import { slides } from "./Slides";

const Carusele = () => {
    return (
        <div className="flex flex-col text-center justify-center items-center mt-6 lg:mt-4">
            <div>
                <h1 className="text-5xl shadow-ul">
                    Zaufali nam!
                </h1>
            </div>
            <div className="flex relative mt-8 lg:hidden">
                <div className="flex items-center justify-flex-start  overflow-x-auto scrollbar-hide">
                    {slides.map((item) => (
                        <div
                            className="flex-shrink-0"
                            key={item.image}
                        >
                            <img
                                src={item.image}
                                alt={item.alt}
                            />
                        </div>
                    ))}
                </div>
                <div className="absolute top-0 right-0 bg-gradient-to-l from-white dark:from-[#1d1d1d] h-[100%] w-24"></div>
            </div>
            <div className="grid-cols-3 hidden lg:grid">
                {slides.map((item) => (
                    <div
                        className="flex justify-center"
                        key={item.image}
                    >
                        <Image
                            src={item.image}
                            alt={item.alt}
                            width={300}
                            height={150}
                            key={item.image}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carusele;
