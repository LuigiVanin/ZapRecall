import HeaderLogo from "../assets/header.png";

export default function Header() {
    return (
        <header>
            <img src={HeaderLogo} alt="" />
            <h1>ZapRecall</h1>
        </header>
    );
}
