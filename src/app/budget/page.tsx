'use client'
import { ChipButton } from "@/components/ChipButton";
import ArrowLeftIcon from "@/icons/ArrowLeftIcon";
import { useRouter } from 'next/navigation';

export default function Budget() {
    const router = useRouter();

    return (
        <div className="h-screen">
            <nav className="flex justify-center items-center w-full h-12 border-b-[1px] border-opacity-50 border-white">
                <ul className="p-2 w-full flex items-center">
                    <li>
                        <ChipButton onClick={() => router.push('/')} icon={<ArrowLeftIcon fill="white" size={20} />} />
                    </li>
                    <li>
                        <h1 className="text-2xl pl-2 font-bold">Budget</h1>
                    </li>
                </ul>
            </nav>

            <aside className="flex justify-center w-32 h-[94%] border-r-[1px] border-opacity-50 border-white">
                <h1>Menu</h1>
            </aside>

            <header className="flex flex-row justify-center ml-3 mt-4 mr-3 align-middle">
            </header>

        </div>
    )
}