import {
    GlobeAltIcon,
    ShoppingCartIcon,
    SpeakerphoneIcon,
} from "@heroicons/react/outline";
import Cards from "./Cards";

const CardsContaner = ({
    title1,
    title2,
    title3,
    text1,
    text2,
    text3,
}) => {
    return (
        <div className="flex flex-wrap justify-around items-center w-screen lg:mt-20">
            <Cards
                icon={<ShoppingCartIcon className="h-14" />}
                title={title1}
                text={text1}
            />
            <Cards
                icon={<SpeakerphoneIcon className="h-14" />}
                title={title2}
                text={text2}
            />
            <Cards
                icon={<GlobeAltIcon className="h-14" />}
                title={title3}
                text={text3}
            />
        </div>
    );
};

export default CardsContaner;
