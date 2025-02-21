type CardProps = {
    text: string;
};

export const Card = ({ text }: CardProps) => {
    return (
        <div className="flex m-1 w-40 h-40 bg-violet-500 hover:bg-violet-900 active:bg-violet-700 font-w justify-center items-center">
            <h3 className="text-white text-xl font-bold">{text}</h3>
        </div>
    );
};