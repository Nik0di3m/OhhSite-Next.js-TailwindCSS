import Image from "next/image";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

const Realizations = () => {
    return (
        <div className="flex flex-col justify-center items-center mt-16 lg:mt-52">
            <div>
                <h1 className="lg:text-6xl">Realizacje</h1>
            </div>
            <div>
                <ImageSlider slides={SliderData} />
            </div>
        </div>
    );
};

export default Realizations;
