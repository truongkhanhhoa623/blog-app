import './Input.scss'
export const Input = ({
  label,
  placeholder,
  value,
  onChange,
  id,
  name,
  error,
  type,
  readonly,
}) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}> { label } </label>
      <input
        className="input__item"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        id={id}
        name={name}
        type={type}
        readOnly={readonly}
      />
      <div className="input__error" style={{ opacity: error ? 1 : 0 }}>
        {error}
      </div>
    </div>
  );
};
