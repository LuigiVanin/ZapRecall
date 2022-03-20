// import { useState } from "react";
import Header from "./components/Header";
import Deck from "./components/Deck";
import Footer from "./components/Footer";
import FirstPage from "./components/FirstPage";
import { useState } from "react";

import "./styles/reset.css";
import "./styles/styles.css";

export default function App() {
    const decks = {
        react: [
            {
                q: "O que é JSX?",
                answer: "Uma extensão de linguagem do JavaScrip",
            },
            {
                q: "O React é __ ",
                answer: "uma biblioteca JavaScript para construção de interfaces",
            },
            { q: "Podemos colocar __ dentro do JSX", answer: "expressões" },
            {
                q: "O ReactDOM nos ajuda __ ",
                answer: "Interagindo com a DOM para colocar componentes React na mesma",
            },
            {
                q: "Usamos o npm para __ ",
                answer: "gerenciar os pacotes necessários e suas dependências",
            },
            {
                q: "Usamos props para __",
                answer: "passar diferentes informações para componentes ",
            },
            {
                q: "Usamos estado (state) para __",
                answer: "dizer para o React quais informações quando",
            },
        ],
        html: [
            {
                q: "O que é DOCTYPE no HTML",
                answer: "Se relaciona com a versão do HTML que queremos usar. DOCTYPE se refere a versão mais atual.",
            },
            {
                q: "As tags semânticas servem para __",
                answer: "Diferênciar as tags de acordo com sua função no site",
            },
            {
                q: "A tag head é especial pois __",
                answer: "Possui especial de adicionar metadata e recursos de estilo ao html",
            },
        ],
        geral: [
            {
                q: "Usamos estado (state) para __",
                answer: "dizer para o React quais informações quando",
            },
            {
                q: "O que é DOCTYPE no HTML",
                answer: "Se relaciona com a versão do HTML que queremos usar. DOCTYPE se refere a versão mais atual.",
            },
            {
                q: "A tag head é especial pois __",
                answer: "Possui especial de adicionar metadata e recursos de estilo ao html",
            },
            {
                q: "Usamos props para __",
                answer: "passar diferentes informações para componentes ",
            },
            {
                q: "Usamos estado (state) para __",
                answer: "dizer para o React quais informações quando",
            },
        ],
    };
    const [result, setResult] = useState([]);
    const [page, setPage] = useState(0);
    const [selectedDeck, setSelectedDeck] = useState(null);
    const [deck, setDeck] = useState([...decks["geral"]]);
    const [goal, setGoal] = useState(0);

    function updateResult(status) {
        setResult([...result, status]);
    }

    function updateGoal(value) {
        if (value < 0) {
            return;
        }
        setGoal(value);
    }

    function selectDeck(deckName) {
        setSelectedDeck(deckName.toLowerCase());
    }

    function changePage() {
        setPage(!page);
        setDeck([...decks[selectedDeck]]);
    }

    function restartGame() {
        setDeck([]);
        setResult([]);
        setSelectedDeck("geral");
        changePage();
    }

    return (
        <>
            {!page ? (
                <FirstPage
                    pageUpdate={
                        goal < 1 || selectedDeck === null
                            ? () => alert("Tá faltando a meta e deck")
                            : changePage
                    }
                    selectDeck={selectDeck}
                    updateGoal={updateGoal}
                    buttonLock={
                        goal < 1 || selectedDeck === null ? "locked" : ""
                    }
                />
            ) : (
                <div className="flash-card">
                    <Header />
                    <Deck
                        deck={deck.sort(() => (Math.random() > 0.5 ? 1 : -1))}
                        updateResult={updateResult}
                    />
                    <Footer
                        totalCards={deck.length}
                        resultArray={result}
                        restart={restartGame}
                        goal={goal}
                    />
                </div>
            )}
        </>
    );
}
