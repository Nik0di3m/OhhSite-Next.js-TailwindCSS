const Cards = ({ icon, title, text }) => {
    return (
        <div className="flex shadow-lg flex-col bg-[#24cee5] text-white mb-8 justify-center h-52 p-4 bg-opacity-70 rounded-lg text-center w-[96%] lg:flex-1 lg:m-4 dark:bg-[#323232]">
            <div className="flex items-center justify-center">
                {icon}
            </div>
            <h2>{title}</h2>
            <h3>{text}</h3>
        </div>
    );
};

export default Cards;
