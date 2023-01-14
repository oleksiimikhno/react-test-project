import './style.css';

export function InputGroup({name,label, ...rest}) {
  return (
    <div className="input-group">
      <input id={name} placeholder={name} {...rest}></input>
      <label htmlFor={name}>{label}</label>
    </div>
  )
}