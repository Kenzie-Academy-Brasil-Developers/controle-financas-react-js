import Card from "../Card";
import Navigation from "../Navigation";
import "./style.css";

function List({ transactions, setTransactions, renderer, setRenderer }) {
  function listHandler(e) {
    setRenderer(
      e.target.value === "inflow"
        ? transactions.filter(({ type }) => type === "Entrada")
        : e.target.value === "outflow"
        ? transactions.filter(({ type }) => type === "Despesa")
        : transactions
    );
  }

  function handlerDelete(item) {
    const changes = [setTransactions, setRenderer];

    changes.forEach((setChanges) =>
      setChanges(transactions.filter(({ id }) => id !== item.id))
    );
  }

  return (
    <section className="content__list">
      <Navigation handler={listHandler} />
      <ul className="list__items">
        {renderer.length > 0 ? (
          renderer.map((item, index) => {
            return item.type === "Entrada" ? (
              <Card
                key={index}
                details={item}
                handler={() => handlerDelete(item)}
                className="list__card list__card--inflow"
              />
            ) : (
              <Card
                key={index}
                details={item}
                handler={() => handlerDelete(item)}
                className="list__card list__card--outflow"
              />
            );
          })
        ) : (
          <>
            <h2>Você ainda não possui nenhum lançamento</h2>
            <figure className="loading-component"></figure>
          </>
        )}
      </ul>
    </section>
  );
}

export default List;
