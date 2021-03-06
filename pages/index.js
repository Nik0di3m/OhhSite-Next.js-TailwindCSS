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
import Carusele from "../components/Carusele/Carusele";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import axios from "../axios";

export default function Home() {
    const [api, setApi] = useState([]);
    const getAPI = async () => {
        await axios
            .get("/home-1")
            .then((res) => {
                console.log(res);
                setApi(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getAPI();
    }, []);

    return (
        <div className="bg-[#f2f2f2] overflow-hidden text-black dark:bg-[#1d1d1d] dark:text-white">
            <Head>
                <title>{api.MetaTitle}</title>
                <meta
                    name="description"
                    content={`${api.MetaDescription}`}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="min-h-screen">
                <Header />
                <Hero title={api.HeroTitle} />
                <CardsContaner
                    title1={api.Card1Title}
                    title2={api.Card2Title}
                    title3={api.Card3Title}
                    text1={api.Card1Text}
                    text2={api.Card2Text}
                    text3={api.Card3Text}
                />
                <Realizations title={api.RealizacjeTitle} />
                <About
                    bigtitle={api.AboutBigTitle}
                    smalltitle={api.AboutSmallTitle}
                    text={api.AboutText}
                />
                <Faq
                    title={api.FaqTitle}
                    text1={api.Faq1Text}
                    text2={api.Faq2Text}
                    text3={api.Faq3Text}
                    text4={api.Faq4Text}
                />
                <Carusele title={api.ClientTitle} />
                <Contact
                    title={api.ContactTitle}
                    text={api.ContactText}
                    phone={api.Phone}
                    mail={api.Mail}
                />
                <Footer />
            </div>
        </div>
    );
}
