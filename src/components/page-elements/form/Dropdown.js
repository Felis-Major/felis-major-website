// Import styles
import formElementStyle from './common-css/FormElement.module.css';
import dropdownStyle from './Dropdown.module.css';

// Import helpers
import appendClassName from '../../../helpers/append-class-name';

function Dropdown(props) {
	const baseClasses = `${formElementStyle['form-element']} ${dropdownStyle['dropdown']}`;
	const classes = appendClassName(baseClasses, props.className);
	return (
		<select
			className={classes}
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
