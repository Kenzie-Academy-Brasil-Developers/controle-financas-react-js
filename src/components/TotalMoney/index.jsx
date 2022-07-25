import "./style.css";

function TotalMoney({ transactions }) {
  function currencyFormat() {
    return !!transactions.length
      ? transactions
          .map((item) => (item.type === "Entrada" ? item.value : -item.value))
          .reduce((acc, cur) => acc + cur)
          .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
      : "R$ 0,00";
  }

  return !!transactions.length ? (
    <section className="action__total-money">
      <div className="total-money__value">
        <h3>Valor total:</h3>
        <span>{currencyFormat()}</span>
      </div>
      <p>Este é seu saldo atual</p>
    </section>
  ) : (
    <></>
  );
}

export default TotalMoney;
