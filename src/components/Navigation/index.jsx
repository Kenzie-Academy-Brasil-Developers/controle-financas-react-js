import "./style.css";

function Navigation({ handler }) {
  return (
    <nav className="list__filter">
      <h4>Resumo financeiro</h4>
      <div className="filter__buttons">
        <button
          onClick={handler}
          className="primary__button primary__button--nav"
          value="all"
        >
          Todos
        </button>
        <button
          onClick={handler}
          className="secondary__button secondary__button--nav"
          value="inflow"
        >
          Entradas
        </button>
        <button
          onClick={handler}
          className="secondary__button secondary__button--nav"
          value="outflow"
        >
          Despesas
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
