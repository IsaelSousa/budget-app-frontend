import { Card } from "@/components/Card";
import Payload from "@/mock/data";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="p-2 w-full flex items-center justify-center bg-rose-300 bg-opacity-5">
                <h1 className="font-bold text-2xl uppercase">App Selector</h1>
            </div>

            <div className="flex flex-wrap m-4">
                {Payload.modules.map((vl, idx) => <Card key={idx} text={vl.name} navigateTo={vl.navigatoTo} />)}
            </div>
        </div>
    );
};