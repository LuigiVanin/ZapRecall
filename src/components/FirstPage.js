import HomeLogo from "../assets/firstPage.png";

export default function FirstPage(props) {
    const { updateGoal, selectDeck, pageUpdate, buttonLock } = { ...props };
    return (
        <div className="home">
            <img src={HomeLogo} alt="" />
            <h1>ZapRecall</h1>
            <select
                onChange={(event) => {
                    selectDeck(event.target.value);
                }}
            >
                <option value="" disabled selected hidden>
                    Escolha seu Deck
                </option>
                <option value="Geral">Geral</option>
                <option value="React">React</option>
                <option value="HTML">HTML</option>
            </select>
            <input
                type="number"
                placeholder="Digite a meta de Zaps"
                onChange={(event) => {
                    if (event.target.value === "") {
                        updateGoal(0);
                    }
                    updateGoal(Number(event.target.value));
                }}
            />
            <button className={buttonLock} onClick={pageUpdate}>
                Iniciar Recall!
            </button>
        </div>
    );
}
