import { Card } from "@/components/Card";
import Payload from "@/mock/data";

export default function Home() {
    return (
        <div>
            {Payload.modules.map((vl, idx) => <Card key={idx} text={vl} />)}
        </div>
    );
};