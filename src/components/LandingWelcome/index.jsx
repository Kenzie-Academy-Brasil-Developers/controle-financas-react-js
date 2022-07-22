import "./style.css";

function LandingWelcome({setLoggedIn}) {
    return (
        <div className="landing__welcome">
            <h2><span className="logo__changecolor">Nu</span> Kenzie</h2>
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button type="submit" onClick={setLoggedIn}>Iniciar</button>
        </div>
    )
}

export default LandingWelcome;