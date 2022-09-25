/* =======================
 * Imports
 * ======================= */

import { Link } from 'react-router-dom';
import style from './NavLink.module.scss';

/* =======================
 * Main
 * ======================= */

const NavLink = (props) => {
	const navLinkClass = style['nav-link'];

	let classes = navLinkClass;
	if (props.className !== undefined) {
		classes += ` ${props.className}`;
	}

	return (
		<Link className={classes} to={props.target}>
			{props.children}
		</Link>
	);
};

export default NavLink;
