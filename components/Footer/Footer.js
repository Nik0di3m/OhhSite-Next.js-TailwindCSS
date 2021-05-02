import {
    MailIcon,
    PhoneIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="flex justify-center flex-col bg-[#1d1d1d] text-white">
            <div className="text-center items-center lg:hidden">
                <div>
                    <Image
                        src="/themes/logo.svg"
                        width={300}
                        height={150}
                    />
                </div>
                <div className="text-lg">
                    © Copyright 2021
                </div>
                <div>
                    <span className="text-xl">
                        ohhsite@ohhsite.pl
                    </span>
                </div>
            </div>
            <div className="hidden lg:flex justify-evenly p-8">
                <div>
                    <Image
                        src="/themes/logo.svg"
                        width={200}
                        height={150}
                    />
                </div>
                <div className="flex flex-col">
                    <h2 className="hover:shadow-ul">
                        <Link href="/o-nas">O nas</Link>
                    </h2>
                    <ul>
                        <li className="hover:shadow-ul">
                            Współpraca
                        </li>
                        <li className="hover:shadow-ul">
                            Realizacje
                        </li>
                        <li className="hover:shadow-ul">
                            Cennik
                        </li>
                        <li className="hover:shadow-ul">
                            Usługi dodatkowe
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col">
                    <h2 className="hover:shadow-ul">
                        <Link href="/projekotowanie-stron-www">
                            Czym się zajmujemy?
                        </Link>
                    </h2>
                    <ul>
                        <li className="hover:shadow-ul">
                            Projektowanie stron WWW
                        </li>
                        <li className="hover:shadow-ul">
                            Reklama w internecie
                        </li>
                        <li className="hover:shadow-ul">
                            Grafika
                        </li>
                        <li className="hover:shadow-ul">
                            SEO
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col justify-start">
                    <h2>Kontakt</h2>
                    <div className="flex justify-start mt-2 hover:shadow-ul">
                        <PhoneIcon className="h-8" />{" "}
                        <span className="ml-2">
                            <a href="tel: 987654321">
                                987654321
                            </a>
                        </span>
                    </div>
                    <div className="flex justify-start hover:shadow-ul">
                        <MailIcon className="h-8 " />
                        <span className="ml-2">
                            <a href="mailto: ohhsite@ohhsite.pl">
                                ohhsite@ohhsite.pl
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
