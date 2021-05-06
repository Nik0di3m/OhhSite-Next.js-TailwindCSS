import Image from "next/image";
import Button from "../Button/Button";
import ImageSlider from "./ImageSlider";
import { SliderData } from "./SliderData";

const Realizations = ({ title }) => {
    return (
        <div className="flex flex-col justify-center items-center mt-16 lg:mt-52">
            <div>
                <h1 className="shadow-ul lg:text-6xl">
                    {title}
                </h1>
            </div>
            <div>
                <ImageSlider slides={SliderData} />
            </div>
        </div>
    );
};

export default Realizations;
