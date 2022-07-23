function Navigation({ handler }) {
    return (
        <nav>
            <h4>Resumo financeiro</h4>

            <button onClick={handler} className="primary__button" value="all">Todos</button>
            <button onClick={handler} className="secondary__button" value="inflow">Entradas</button>
            <button onClick={handler} className="secondary__button" value="outflow">Despesas</button>
        </nav>
    )
}

export default Navigation;
