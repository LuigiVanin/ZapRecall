import { useState } from "react";

export default function Card(props) {
    const [stage, setStage] = useState(0);

    function chooseStage() {
        if (stage === 0) {
            return (
                <>
                    <h1>Pergunta {props.index}</h1>
                    <ion-icon name="play-outline"></ion-icon>
                </>
            );
        } else {
            return "";
        }
    }
    return <div className="card">{chooseStage()}</div>;
}
