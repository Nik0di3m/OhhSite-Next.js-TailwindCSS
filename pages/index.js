import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import ParticlesBackground from "../components/Particles/ParticlesBackground";

export default function Home() {
    return (
        <div className="bg-white text-black dark:bg-[#1d1d1d] dark:text-white">
            <Head>
                <title>
                    Dark mode with Tailwind and Next.js
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <ParticlesBackground className="relative" />
            <div className="absolute top-[50%]">
                asdasdads
            </div>
            <div className="h-screen"></div>
        </div>
    );
}
