import Button from "../Button/Button";
import ParticlesBackground from "../Particles/ParticlesBackground";

const Hero = () => {
    return (
        <div className="relative h-[50vh]">
            <ParticlesBackground />
            <div className="flex-col w-screen justify-center items-center text-center absolute top-[30%]">
                <div className="">
                    <h1>
                        Projektujemy<br></br>strony & sklepy
                    </h1>
                    <h2>Zdobywaj nowych klientów!</h2>
                </div>
                <Button />
            </div>
        </div>
    );
};

export default Hero;
