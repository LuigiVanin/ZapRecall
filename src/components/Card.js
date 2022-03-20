import { useState } from "react";
import SpinImage from "../assets/spin.png";

export default function Card(props) {
    const [stage, setStage] = useState("close");
    const [status, setStatus] = useState("");

    function confirmAswer(result) {
        setStage("close");
        setStatus(result);
        props.updateResult(result);
    }

    function StatusIcon() {
        if (status === "bad") {
            return <ion-icon name="close-circle"></ion-icon>;
        } else if (status === "ok") {
            return <ion-icon name="help-circle"></ion-icon>;
        } else if (status === "good") {
            return <ion-icon name="checkmark-circle"></ion-icon>;
        }
    }

    return (
        <div className={`card ${stage} ${status}`}>
            {stage === "close" ? (
                <>
                    <p className={stage}>Pergunta {props.index + 1}</p>
                    {status === "" ? (
                        <ion-icon
                            name="play-outline"
                            onClick={() => {
                                setStage("open");
                            }}
                        ></ion-icon>
                    ) : (
                        StatusIcon()
                    )}
                </>
            ) : (
                <>
                    <p>{stage === "open" ? props.info.q : props.info.answer}</p>
                    {stage === "open" ? (
                        <img
                            src={SpinImage}
                            onClick={() => {
                                setStage("end");
                            }}
                        ></img>
                    ) : (
                        <div className="button-box">
                            <button onClick={() => confirmAswer("bad")}>
                                Não Lembro
                            </button>
                            <button onClick={() => confirmAswer("ok")}>
                                Quase não lembrei
                            </button>
                            <button onClick={() => confirmAswer("good")}>
                                Zap!
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
