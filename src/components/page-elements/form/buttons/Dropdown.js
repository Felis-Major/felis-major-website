// Import styles
import formElementStyle from "../FormElement.module.css";
import dropdownStyle from "./Dropdown.module.css";

function Dropdown(props) {
  const classes = `${formElementStyle["form-element"]} ${dropdownStyle["dropdown"]}`;

  return (
    <select
      className={`${classes} ${props.className}`}
      onChange={(event) => props.onChange(event.target.value)}
      options={props.options}
    >
      {props.options.map((x) => (
        <option value={x.value}>{x.text}</option>
      ))}
    </select>
  );
}

export default Dropdown;
