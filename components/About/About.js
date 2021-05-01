import Image from "next/image";
import Button from "../Button/Button";

const About = () => {
    return (
        <div className="flex mt-20">
            <section className="flex flex-col items-center justify-center bg-[#ededed] p-8 text-center dark:bg-[#0f0f0f] lg:max-w-[50vw]">
                <div>
                    <h1 className=" lg:text-6xl">
                        Jesteśmy
                    </h1>
                    <h1 className="lg:text-4xl">
                        profesjonalistami
                    </h1>
                </div>
                <div className="text-justify mt-3">
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Aenean
                        magna dolor, tincidunt sed convallis
                        vitae, tempor ac ipsum. Nullam
                        sagittis leo vel tincidunt
                        hendrerit. Nullam consectetur quam
                        felis, non vehicula justo tincidunt
                        in. Integer vehicula tortor nibh,
                        lobortis dignissim lectus imperdiet
                        non. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Integer
                        felis libero, elementum sit amet
                        interdum vel, porta at mi. Cras
                        mauris eros, lobortis in commodo
                        non, faucibus in ipsum. Duis aliquet
                        odio eget diam pulvinar, in
                        vestibulum libero bibendum. Donec
                        risus odio, sagittis eu dui nec,
                        sagittis pharetra diam. Integer
                        congue congue congue. Donec a turpis
                        rutrum, pellentesque metus et,
                        accumsan nunc. Donec consequat, nunc
                        sit amet rutrum elementum, ex sem
                        fringilla ex, ac congue dolor mi
                        vitae magna. Nulla tincidunt rhoncus
                        feugiat. Pellentesque elementum
                        nulla eget tempor posuere. Cras
                        tristique elit ac nulla dictum, non
                        scelerisque enim facilisis. Nunc
                        fringilla tellus turpis, vitae
                        faucibus sapien commodo nec.
                    </p>
                </div>
                <Button text="Więcej!" link="/o-nas" />
                <Button text="Kontakt" link="/kontakt" />
            </section>
            <div className="hidden lg:flex">
                <Image
                    src="/themes/onas/onasmini.webp"
                    width={1618}
                    height={1080}
                    alt="Content"
                />
            </div>
        </div>
    );
};

export default About;
