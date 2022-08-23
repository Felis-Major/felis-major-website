// Import styles
import formElementStyle from '../FormElement.module.css';
import textInputStyle from './TextInput.module.css';
import textFieldStyle from './TextField.module.css';

// Import helpers
import appendClassName from '../../../../helpers/append-class-name';

function TextField(props) {
	const baseClasses = `${formElementStyle['form-element']} ${textInputStyle['text-input']} ${textFieldStyle['text-field']}`;
	const classes = appendClassName(baseClasses, props.className);
	return <input className={classes} placeholder={props.placeholder} />;
}

export default TextField;
