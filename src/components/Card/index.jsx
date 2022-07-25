import "./style.css";

function Card({ details, handler, className }) {
  return (
    <li className={className}>
      <div className="card__details">
        <h3>{details.description}</h3>
        <span>
          {details.value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button onClick={handler}></button>
      </div>
      <p>{details.type}</p>
    </li>
  );
}

export default Card;
