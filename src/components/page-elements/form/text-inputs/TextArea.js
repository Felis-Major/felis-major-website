// Import styles
import formElementStyle from '../FormElement.module.css';
import textInputStyle from './TextInput.module.css';
import textAreaStyle from './TextArea.module.css';

// Import helpers
import appendClassName from '../../../../helpers/append-class-name';

function TextArea(props) {
	const baseClasses = `${formElementStyle['form-element']} ${textInputStyle['text-input']} ${textAreaStyle['text-area']}`;
	const classes = appendClassName(baseClasses, props.className);
	return (
		<textarea className={classes} placeholder={props.placeholder}></textarea>
	);
}

export default TextArea;
