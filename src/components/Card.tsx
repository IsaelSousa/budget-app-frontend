import Link from 'next/link';

type CardProps = {
    text: string;
    navigateTo: string;
};

export const Card = ({ text, navigateTo }: CardProps) => {

    return (
        <Link
            href={navigateTo}
            className="flex m-1 w-40 h-40 bg-violet-500 hover:bg-violet-900 active:bg-violet-700 font-w justify-center items-center cursor-pointer select-none rounded-lg"
        >
            <h3 className="text-white text-xl font-bold">{text}</h3>
        </Link>
    );
};