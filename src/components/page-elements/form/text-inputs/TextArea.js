// Import styles
import formElementStyle from "../FormElement.module.css";
import textInputStyle from "./TextInput.module.css";
import textAreaStyle from "./TextArea.module.css";

function TextArea(props) {
  const formElementClass = formElementStyle["form-element"];
  const textInputClass = textInputStyle["text-input"];
  const textAreaClass = textAreaStyle["text-area"];
  const classes = `${formElementClass} ${textInputClass} ${textAreaClass}`;
  return (
    <textarea
      className={`${classes} ${props.className}`}
      placeholder={props.placeholder}
    />
  );
}

export default TextArea;
