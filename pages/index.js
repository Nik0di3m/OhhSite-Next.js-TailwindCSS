import { useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import ParticlesBackground from "../components/Particles/ParticlesBackground";
import Hero from "../components/Hero/Hero";
import Cards from "../components/Cards/Cards";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import CardsContaner from "../components/Cards/CardsContaner";
import Realizations from "../components/Realizations/Realizations";
import About from "../components/About/About";
import Faq from "../components/FAQ/Faq";

export default function Home() {
    return (
        <div className="bg-white overflow-hidden text-black dark:bg-[#1d1d1d] dark:text-white">
            <Head>
                <title>OhhSite.</title>
                <meta
                    name="description"
                    content="Tworzymy strony i sklepy internetowe! Używamy najnowszych technologi żeby strona była jak najlepsza!"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen">
                <Header />
                <Hero />
                <CardsContaner />
                <Realizations />
                <About />
                <Faq />
            </div>
        </div>
    );
}
