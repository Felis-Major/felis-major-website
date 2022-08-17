import style from './Card.module.css';

let sizes = {};
sizes['small'] = 'card__small';
sizes['medium'] = 'card__medium';
sizes['large'] = 'card__large';
sizes['responsive'] = 'card__responsive';
function getSizeStyle(arg) {
	if (sizes[arg] !== null) {
		return style[sizes[arg]];
	} else {
		return '';
	}
}

function Card(props) {
	let classes = `${style['card']} ${getSizeStyle(props.size)}`;
	return <div className={classes}>{props.children}</div>;
}

export default Card;
