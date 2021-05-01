const FaqCard = ({ number, text }) => {
    return (
        <div className="flex relative shadow-strong flex-col bg-[#24cee5] text-white mb-8 h-52 p-4  rounded-lg  w-[96%] lg:max-w-sm lg:m-4 dark:bg-[#323232]">
            <div className="">
                <h1 className=" dark:text-[#24cee5]">
                    {number}.
                </h1>
            </div>
            <p>{text}</p>
        </div>
    );
};

export default FaqCard;
