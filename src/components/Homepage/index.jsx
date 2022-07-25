import { useState } from "react";
import HomepageHeader from "../Header";
import Formulary from "../Formulary";
import TotalMoney from "../TotalMoney";
import List from "../List";

import "./style.css";

function Homepage({ handler, transactions, setTransactions }) {
  const [listRenderer, setListRenderer] = useState(transactions);

  return (
    <div className="homepage">
      <HomepageHeader handler={handler} />
      <main className="homepage__content">
        <section className="content__action">
          <Formulary
            transactions={transactions}
            setTransactions={setTransactions}
            setRenderer={setListRenderer}
          />
          <TotalMoney
            transactions={transactions}
          />
        </section>
        <List
          transactions={transactions}
          setTransactions={setTransactions}
          renderer={listRenderer}
          setRenderer={setListRenderer}
        />
      </main>
    </div>
  );
}

export default Homepage;
