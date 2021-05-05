import { useEffect, useState } from "react";
import Button from "../Button/Button";
import ParticlesBackground from "../Particles/ParticlesBackground";
import axios from "../../axios";
const Hero = ({ title }) => {
    return (
        <div className="relative h-[50vh]">
            <ParticlesBackground />
            <div className="flex-col w-screen justify-center items-center text-center absolute top-[30%] lg:top-52">
                <div className="">
                    <h1 className="lg:text-6xl">{title}</h1>
                    <h2 className="lg:text-4xl mt-3">
                        Zdobywaj nowych klientów!
                    </h2>
                </div>
                <Button text="Bezpłatna wycena" link="/" />
            </div>
        </div>
    );
};

export default Hero;
