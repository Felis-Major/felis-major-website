/* =======================
 * Imports
 * ======================= */

import { useState } from 'react';
import style from './Header.module.css';

import fmLogo from '../../imgs/logos/felis-major/fm-logo-wide.png';
import twitterNormal from '../../imgs/logos/socials/twitter-normal.png';
import instagramNormal from '../../imgs/logos/socials/instagram-normal.png';
import NavLink from './content/NavLink';

/* =======================
 * Main
 * ======================= */

const Header = (props) => {
	const headerClass = style['header'];
	let classes = headerClass;

	if (props.className !== undefined) {
		classes += ` ${props.className}`;
	}

	return (
		<header className={classes}>
			<LeftSection />
			<RightSection />
		</header>
	);
};

export default Header;

/* =======================
 * Private
 * ======================= */

const LeftSection = () => {
	const leftSectionClass = style['left-section'];
	const logoClass = style['logo'];
	const menuButtonClass = style['menu-button'];
	const linksClass = style['links'];
	const linkClass = style['link'];
	const hiddenID = style['hidden'];

	const [showLinks, setShowLinks] = useState(false);
	const links = [
		{ key: 'a', target: '#', content: 'About Us' },
		{ key: 'b', target: '#', content: 'Our Services' },
		{ key: 'c', target: '#', content: 'Wastern' },
		{ key: 'd', target: '#', content: 'Press' },
		{ key: 'e', target: '#', content: 'Contact Us' },
	];

	return (
		<div className={leftSectionClass}>
			<img className={logoClass} src={fmLogo} />
			<a
				onClick={() => setShowLinks(!showLinks)}
				className={menuButtonClass}
			></a>
			<div className={linksClass} id={showLinks ? hiddenID : ''}>
				{links.map((link) => (
					<NavLink className={linkClass} target={link.target} key={link.key}>
						{link.content}
					</NavLink>
				))}
			</div>
		</div>
	);
};

const RightSection = () => {
	const rightSectionClass = style['right-section'];
	const socialLinkClass = style['social-link'];

	return (
		<div className={rightSectionClass}>
			<img className={socialLinkClass} src={twitterNormal} />
			<img className={socialLinkClass} src={instagramNormal} />
		</div>
	);
};
