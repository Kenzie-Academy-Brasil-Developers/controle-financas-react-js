import LandingWelcome from "./components/LandingWelcome";
import HomepageHeader from "./components/Header";
import Formulary from "./components/Formulary";
import TotalMoney from "./components/TotalMoney";
import { useState } from "react";

import "./assets/css/reset.css";
import "./css/base.css";
import "./css/App.css";
import Navigation from "./components/Navigation";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);

  function handleLogin() {
    setLoggedIn(!loggedIn);
  }

  return (
    <div className="App">
      {loggedIn ? (
        <div className="homepage">
          <HomepageHeader />
          <main className="homepage__content">
            <section className="content__action">
              <Formulary />
              <TotalMoney />
            </section>
            <section className="content__feed">
              <Navigation
                transactions={listTransactions}
                setTransactions={setListTransactions}
              />
            </section>
          </main>
        </div>
      ) : (
        <>
          <div className="landing-page">
            <LandingWelcome setLoggedIn={handleLogin} />
            <figure className="landing__bg-figure"></figure>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
