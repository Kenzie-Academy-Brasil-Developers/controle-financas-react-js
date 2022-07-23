import "./style.css";

function Formulary({ transaction, setTransaction }) {
  function addTransaction(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={addTransaction} className="content__form">
      <div className="form__description">
        <label htmlFor="descricao">Descrição</label>
        <input
          type="text"
          name="descricao"
          placeholder="Digite aqui sua descrição"
          className="form__input"
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div className="form__half">
        <div className="form__value half__input">
          <label htmlFor="valor">Valor</label>
          <input
            required
            type="text"
            name="valor"
            className="form__input form__input--half"
            placeholder="Insira um valor"
          />
        </div>
        <div className="form__type half__input">
          <label htmlFor="tipo">Tipo de valor</label>
          <select
            required
            name="tipo"
            className="form__input form__input--half"
          >
            <option value="inflow" defaultValue>
              Entrada
            </option>
            <option value="outflow">Despesa</option>
          </select>
        </div>
      </div>
      <button className="primary__button" type="submit">Inserir valor</button>
    </form>
  );
}

export default Formulary;
