import "./style.css";

function Card({ details, handler }) {
  return (
    <li className="list__card">
      <div>
        <h3>{details.description}</h3>
        <span>{details.value}</span>
        <button onClick={handler}>Apagar</button>
      </div>
      <p>{details.type}</p>
    </li>
  );
}

export default Card;
