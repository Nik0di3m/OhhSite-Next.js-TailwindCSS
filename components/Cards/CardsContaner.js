import {
    GlobeAltIcon,
    ShoppingCartIcon,
    SpeakerphoneIcon,
} from "@heroicons/react/outline";
import Cards from "./Cards";

const CardsContaner = () => {
    return (
        <div className="flex flex-wrap justify-around items-center w-screen">
            <Cards
                icon={<ShoppingCartIcon className="h-14" />}
                title="Sklepy internetowe"
                text="Przenieś swój biznes do internetu"
            />
            <Cards
                icon={<SpeakerphoneIcon className="h-14" />}
                title="Pozycjonowanie"
                text="Zwiększ widoczność strony"
            />
            <Cards
                icon={<GlobeAltIcon className="h-14" />}
                title="Sklepy internetowe"
                text="Zadbaj o wizerunek Twojej firmy w internecie"
            />
        </div>
    );
};

export default CardsContaner;
