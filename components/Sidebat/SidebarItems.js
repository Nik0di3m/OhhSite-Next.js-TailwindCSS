import Link from "next/link";
const SidebarItems = ({ text, link }) => {
    return (
        <div>
            <div className=" hover:shadow-ul">
                <h3>
                    <Link href={`${link}`}>{text}</Link>
                </h3>
            </div>
        </div>
    );
};

export default SidebarItems;
