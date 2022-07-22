import { useState } from "react";
import "./style.css";

function Navigation({ transactions }) {
  const [filter, setFilter] = useState(transactions);
  
  function filterByType(e) {
    setFilter(transactions.filter(({ type }) => type === e.target.value));
  }

  return (
    <nav className="results__filter">
      <h3>Resumo financeiro</h3>

      <button className="filter__button filter__button--all">Todos</button>
      <button onClick={filterByType} value="entrada" className="filter__button">
        Entradas
      </button>
      <button onClick={filterByType} value="saída" className="filter__button">
        Despesas
      </button>
    </nav>
  );
}

export default Navigation;
