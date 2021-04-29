import Link from "next/link";

const MenuItemsLg = ({ items, link }) => {
    return (
        <div className="ml-3 hover:shadow-ul ">
            <div>
                <Link href={`${link}`}>{items}</Link>
            </div>
        </div>
    );
};

export default MenuItemsLg;
