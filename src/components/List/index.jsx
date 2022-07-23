import { useState } from "react";
import Card from "../Card";
import Navigation from "../Navigation";
import "./style.css";

function List({ transactions, setTransactions }) {
  const [renderList, setRenderList] = useState(transactions);

  function listHandler(e) {
    setRenderList(
      e.target.value === "inflow"
        ? transactions.filter(({ type }) => type === "Entrada")
        : e.target.value === "outflow"
        ? transactions.filter(({ type }) => type === "Despesa")
        : transactions
    );
  }
  
  function handlerDelete(item) {
    const changes = [setTransactions, setRenderList];

    changes.forEach((setChanges) =>
      setChanges(
        transactions.filter(({ description }) => description !== item.description)
      )
    );
  }

  return (
    <section className="content__list">
      <Navigation handler={listHandler} />
      <ul className="list__items">
        {renderList.length > 0 ? (
          renderList.map((item, index) => (
            <Card details={item} key={index} handler={() => handlerDelete(item)} />
          ))
        ) : (
          <>
            <h2>Você ainda não possi nenhum lançamento</h2>
            <figure className="empty-list"></figure>
          </>
        )}
      </ul>
    </section>
  );
}

export default List;
