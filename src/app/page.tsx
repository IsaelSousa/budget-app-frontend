import { Card } from "@/components/Card";
import Payload from "@/mock/data";

export default function Home() {
    return (
        <div className="flex flex-wrap m-4">
            {Payload.modules.map((vl, idx) => <Card key={idx} text={vl} />)}
        </div>
    );
};