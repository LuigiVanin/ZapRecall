export default function Footer(props) {
    const { resultArray, totalCards } = { ...props };

    function resutlIcon(item) {
        if (item === "bad") {
            return <ion-icon name="close-circle" class={item}></ion-icon>;
        } else if (item === "ok") {
            return <ion-icon name="help-circle" class={item}></ion-icon>;
        } else {
            return <ion-icon name="checkmark-circle" class={item}></ion-icon>;
        }
    }

    function finishDeck() {
        if (resultArray.indexOf("bad") !== -1) {
            console.log(resultArray);
            return (
                <>
                    <h1>😢 PUTZ!</h1>
                    <p>Ainda faltaram alguns... Mas não desanime!</p>
                </>
            );
        }
        return (
            <>
                <h1>🥳 Parabéns!</h1>
                <p>Você não esqueceu de nenhum flashcard!</p>
            </>
        );
    }

    return (
        <footer className={resultArray.length !== totalCards ? "" : "finished"}>
            <div className="counter">
                {resultArray.length !== totalCards ? (
                    <>
                        {resultArray.length}/{totalCards} Concluidos
                    </>
                ) : (
                    finishDeck()
                )}
            </div>
            <div className="status">
                {resultArray.map((item) => resutlIcon(item))}
            </div>
            {resultArray.length !== totalCards ? (
                ""
            ) : (
                <button>REINICIAR RECALL</button>
            )}
        </footer>
    );
}
