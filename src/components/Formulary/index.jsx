import { useState } from "react";
import Input from "../Input";
import "./style.css";

function Formulary({ transactions, setTransactions, setRenderer }) {
  const [description, setDescription] = useState("");
  const [valueType, setValueType] = useState("");
  const [value, setValue] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    const newId = !transactions.length ? 1 
      : Math.max(...transactions.map(index => index.id)) + 1;

    setTransactions([...transactions, { id: newId, description: description, type: valueType, value: value }])
    setRenderer([...transactions, { id: newId, description: description, type: valueType, value: value }])
  }

  function getInput(e) {
    const eventValue = e.target.value

    e.target.name === "descricao"
      ? setDescription(eventValue)
      : e.target.name === "valor"
      ? setValue(parseFloat(eventValue))
      : setValueType(eventValue);
  }

  return (
    <form onSubmit={handleSubmit} className="content__form">
      <div className="form__description">
        <Input
          labelText="Descrição"
          name="descricao"
          setChange={getInput}
          placeholder="Digite aqui sua descrição"
          className="form__input"
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div className="form__half">
        <div className="form__value half__input">
          <Input
            labelText="Valor"
            name="valor"
            setChange={getInput}
            placeholder="Valor"
            className="form__input form__input--half"
          />
        </div>
        <div className="form__type half__input">
          <Input
            select
            labelText="Tipo de valor"
            name="tipo"
            setChange={getInput}
            className="form__input form__input--half"
          />
        </div>
      </div>
      <button className="primary__button" type="submit">
        Inserir valor
      </button>
    </form>
  );
}

export default Formulary;
