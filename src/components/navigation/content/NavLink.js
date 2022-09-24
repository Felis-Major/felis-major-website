/* =======================
 * Imports
 * ======================= */

import style from './NavLink.module.css';

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
		<a className={classes} href={props.target}>
			{props.children}
		</a>
	);
};

export default NavLink;
