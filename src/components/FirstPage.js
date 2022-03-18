export default function FirstPage(props) {
    return (
        <div className="home">
            <img src="assets/firstPage.png" alt="" />
            <h1>ZapRecall</h1>
            <button onClick={props.pageUpdate}>Iniciar Recall!</button>
        </div>
    );
}
