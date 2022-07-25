function Input({ select=false, labelText, name, setChange, placeholder, className }) {
  return !select 
    ? (
    <>
      <label htmlFor={name}>{labelText}</label>
      <input
        required
        type="text"
        name={name}
        onChange={setChange}
        placeholder={placeholder}
        className={className}
      />
    </>
  ) : (
    <>
      <label htmlFor={name}>Tipo de valor</label>
      <select required name={name} onChange={setChange} className={className} defaultValue="">
        <option value="" disabled>Selecione</option>
        <option value="Entrada">Entrada</option>
        <option value="Despesa">Despesa</option>
      </select>
    </>
  );
}

export default Input;
