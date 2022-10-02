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
import Translate from '../../localization/Translate';

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
				className={`${menuButtonClass} ${
					showLinks ? menuButtonActiveClass : ''
				}`}
			></a>

			<div className={linksClass} id={showLinks ? hiddenID : ''}>
				{links.map((link, index) => (
					<NavLink className={linkClass} target={link.target} key={index}>
						{Translate(link.content)}
					</NavLink>
				))}
				<SocialLinks />
			</div>
		</div>
	);
};

const RightSection = () => {
	const rightSectionClass = style['right-section'];

	return (
		<div className={rightSectionClass}>
			<SocialLinks />
		</div>
	);
};

const SocialLinks = () => {
	const socialLinksClass = style['social-links'];

	return (
		<div className={socialLinksClass}>
			<SocialLink
				src={twitterNormal}
				target='https://twitter.com/felismajorrr'
			/>
			<SocialLink
				src={instagramNormal}
				target='https://instagram.com/felismajorrr?igshid=YmMyMTA2M2Y='
			/>
		</div>
	);
};

const SocialLink = (props) => {
	const socialLinkClass = style['social-link'];

	return (
		<a href={props.target} target='_blank' className={socialLinkClass}>
			<img src={props.src} />
		</a>
	);
};
