type CardProps = {
    text: string;
};

export const Card = ({ text }: CardProps) => {
    return (
        <div className="w-64 h-64 bg-white font-w justify-center align-middle">
            <h3 className="text-black">{text}</h3>
        </div>
    );
};