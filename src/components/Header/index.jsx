import "./style.css";

function HomepageHeader({handler}) {
    return (
        <header className="page__header">
            <h1 className="header__title">nuKenzie</h1>
            <button onClick={handler} className="secondary__button" id="logout">Logout</button>
        </header>
    )
}

export default HomepageHeader;
