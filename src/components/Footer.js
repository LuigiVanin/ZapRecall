export default function Footer(props) {
    const { resultArray, totalCards, restart, goal } = { ...props };

    function resutlIcon(item) {
        if (item === "bad") {
            return <ion-icon name="close-circle" class={item}></ion-icon>;
        } else if (item === "ok") {
            return <ion-icon name="help-circle" class={item}></ion-icon>;
        } else {
            return <ion-icon name="checkmark-circle" class={item}></ion-icon>;
        }
    }

    function countAppereaces(array, item) {
        let count = 0;
        for (const i of array) {
            if (i === item) {
                count++;
            }
        }
        return count;
    }

    function finishDeck() {
        if (countAppereaces(resultArray, "bad") > totalCards - goal) {
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
                <button onClick={restart}>REINICIAR RECALL</button>
            )}
        </footer>
    );
}
