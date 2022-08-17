import style from './NavLink.module.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function NavLink(props) {
	let classes = `${style['nav-link']} ${getSizeClass()}`;
	const location = useLocation();

	if (location.pathname == props.target) {
		classes += ` ${style['nav-link__active']}`;
	}

	function getSizeClass() {
		switch (props.size) {
			default:
			case 'default':
				return style['nav-link__default'];
			case 'small':
				return style['nav-link__small'];
		}
	}

	return (
		<li className={classes}>
			<Link to={props.target}>{props.children}</Link>
		</li>
	);
}

export default NavLink;
