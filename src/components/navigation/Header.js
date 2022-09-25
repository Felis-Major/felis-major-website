/* =======================
 * Imports
 * ======================= */

import { useState } from 'react';
import style from './Header.module.scss';

import fmLogo from '../../imgs/logos/felis-major/fm-logo-wide.png';
import twitterNormal from '../../imgs/logos/socials/twitter-normal.png';
import instagramNormal from '../../imgs/logos/socials/instagram-normal.png';
import NavLink from './links/NavLink';
import links from './links/links';

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
	const menuButtonNormalClass = style['menu-button__normal'];
	const menuButtonActiveClass = style['menu-button__active'];
	const linksClass = style['links'];
	const linkClass = style['link'];
	const hiddenID = style['hidden'];

	const [showLinks, setShowLinks] = useState(false);

	return (
		<div className={leftSectionClass}>
			<img className={logoClass} src={fmLogo} />
			<a
				onClick={() => setShowLinks(!showLinks)}
				className={showLinks ? menuButtonActiveClass : menuButtonNormalClass}
			></a>
			<div className={linksClass} id={showLinks ? hiddenID : ''}>
				{links.map((link, index) => (
					<NavLink className={linkClass} target={link.target} key={index}>
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
