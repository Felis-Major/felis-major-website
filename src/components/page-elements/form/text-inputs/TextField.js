// Import styles
import formElementStyle from "../FormElement.module.css";
import textInputStyle from "./TextInput.module.css";
import textFieldStyle from "./TextField.module.css";

function TextField(props) {
  const formElementClass = formElementStyle["form-element"];
  const textInputClass = textInputStyle["text-input"];
  const textAreaClass = textFieldStyle["text-field"];
  const classes = `${formElementClass} ${textInputClass} ${textAreaClass}`;
  return (
    <input
      className={`${classes} ${props.className}`}
      placeholder={props.placeholder}
    />
  );
}

export default TextField;
