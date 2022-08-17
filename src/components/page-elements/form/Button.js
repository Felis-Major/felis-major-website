// Impport styles
// Import styles
import formElementStyle from './common-css/FormElement.module.css';
import buttonStyle from './Button.module.css';

// Import helpers
import appendClassName from '../../../helpers/append-class-name';

function Button(props) {
	const baseClasses = `${formElementStyle['form-element']} ${buttonStyle['button']}`;
	const classes = appendClassName(baseClasses, props.className);
	return <button className={classes}>{props.children}</button>;
}

export default Button;
