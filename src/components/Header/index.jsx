import "./style.css";

function HomepageHeader({handler}) {
    return (
        <header className="page__header">
            <h1 className="header__title"><span className="title__extra">Nu</span> Kenzie</h1>
            <button onClick={handler} className="secondary__button" id="logout">Início</button>
        </header>
    )
}

export default HomepageHeader;
