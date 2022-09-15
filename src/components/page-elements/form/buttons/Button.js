// Import styles
import { Link } from 'react-router-dom';
import formElementStyle from '../FormElement.module.css';
import buttonStyle from './Button.module.css';

function Button(props) {
	const formElementClass = formElementStyle['form-element'];
	const buttonClass = buttonStyle['button'];
	const classes = `${formElementClass} ${buttonClass}`;

	// Html code of the button
	const htmlButton = (onClick, className, children) => (
		<button onClick={onClick} className={`${classes} ${className}`}>
			{children}
		</button>
	);

	switch (props.mode) {
		// Link mode loads a new route
		case 'link':
			return (
				<Link style={{ textDecoration: 'none' }} to={props.target}>
					{htmlButton(props.onClick, props.className, props.children)}
				</Link>
			);

		// Url mode opens an url in a new tab
		case 'url':
			const openUrl = () => {
				if (props.target == null || props.target == '') return;
				window.open(props.target, '_blank', 'noopener,noreferrer');
				if (openUrl) openUrl.opener = null;
			};

			return htmlButton(
				() => openUrl(props.target),
				props.className,
				props.children
			);

		// Default mode is custom onclick event
		default:
			return htmlButton(props.onClick, props.className, props.children);
	}
}

export default Button;
