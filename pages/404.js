import Head from "next/head";
import Button from "../components/Button/Button";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";

const notFound = () => {
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
            <Header />
            <div className=" min-h-[80vh] flex flex-col justify-center items-center">
                <h1>Opsss...</h1>
                <br />
                <h2>Strona której szukasz nie istnieje!</h2>
                <br />
                <Button text="Wracam!" link="/" />
            </div>
            <Footer />
        </div>
    );
};

export default notFound;
