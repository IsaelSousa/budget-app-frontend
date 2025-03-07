
type ChipButtonProps = {
    text?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
};

export const ChipButton = ({ text, onClick, icon }: ChipButtonProps) => {

    return (
        <button
            onClick={onClick}
            className="flex m-1 bg-violet-500 hover:bg-violet-900 active:bg-violet-700 font-w justify-center items-center cursor-pointer select-none rounded-lg"
        >
            <div className="flex justify-center items-center m-[6px]">
                {icon}
            </div>
            {text && <h3 className="text-white text-xl m-1 ml-2 mr-2">{text}</h3>}
        </button>
    );
};