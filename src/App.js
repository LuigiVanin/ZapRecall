// import { useState } from "react";
import Header from "./components/Header";
import Deck from "./components/Deck";
import Footer from "./components/Footer";
import FirstPage from "./components/FirstPage";
import { useState } from "react";

export default function App() {
    const decks = {
        geral: [
            {
                q: "O que é JSX?",
                answer: "Uma extensão de linguagem do JavaScrip",
            },
            {
                q: "O React é __ ",
                answer: "uma biblioteca JavaScript para construção de interfaces",
            },
            { q: "Podemos colocar __ dentro do JSX", answer: "expressões" },
            // {
            //     q: "O ReactDOM nos ajuda __ ",
            //     answer: "Interagindo com a DOM para colocar componentes React na mesma",
            // },
            // {
            //     q: "Usamos o npm para __ ",
            //     answer: "gerenciar os pacotes necessários e suas dependências",
            // },
            // {
            //     q: "Usamos props para __",
            //     answer: "passar diferentes informações para componentes ",
            // },
            // {
            //     q: "Usamos estado (state) para __",
            //     answer: "dizer para o React quais informações quando",
            // },
        ],
    };
    const [result, setResult] = useState([]);
    const [page, setPage] = useState(0);
    function updateResult(status) {
        setResult([...result, status]);
    }

    function changePage() {
        setPage(!page);
    }

    return (
        <>
            {!page ? (
                <FirstPage pageUpdate={changePage} />
            ) : (
                <div className="flash-card">
                    <Header />
                    <Deck deck={decks.geral} updateResult={updateResult} />
                    <Footer
                        totalCards={decks.geral.length}
                        resultArray={result}
                    />
                </div>
            )}
        </>
    );
}
