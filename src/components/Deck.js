import Card from "./Card.js";

export default function Deck(props) {
    return (
        <main>
            {props.deck.map((item, idx) => {
                return (
                    <Card
                        index={idx}
                        info={item}
                        updateResult={props.updateResult}
                    />
                );
            })}
        </main>
    );
}
