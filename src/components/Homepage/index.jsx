import { useState } from "react";
import HomepageHeader from "../Header";
import Formulary from "../Formulary";
import TotalMoney from "../TotalMoney"
import List from "../List";

import "./style.css";

function Homepage({ handler }) {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "Entrada", value: 2500 },
    { description: "Conta de luz", type: "Despesa", value: 150 },
  ]);

  return (
    <div className="homepage">
      <HomepageHeader handler={handler} />
      <main className="homepage__content">
        <section className="content__action">
          <Formulary
            transaction={listTransactions}
            setTransaction={setListTransactions}
          />
          <TotalMoney transaction={listTransactions} />
        </section>
        <List transactions={listTransactions} setTransactions={setListTransactions} />
      </main>
    </div>
  );
}

export default Homepage;
