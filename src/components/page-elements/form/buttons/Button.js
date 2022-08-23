// Import styles
import formElementStyle from '../FormElement.module.css';
import buttonStyle from './Button.module.css';

// Import helpers
import appendClassName from '../../../../helpers/append-class-name';

function Button(props) {
	const baseClasses = `${formElementStyle['form-element']} ${buttonStyle['button']}`;
	const classes = appendClassName(baseClasses, props.className);
	return (
		<button onClick={props.onClick} className={classes}>
			{props.children}
		</button>
	);
}

export default Button;
