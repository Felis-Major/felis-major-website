/* =======================
 * Imports
 * ======================= */

import NavLink from './links/NavLink';
import style from './Footer.module.scss';
import links from './links/links';
import Translate from '../../localization/Translate';

/* =======================
 * Main
 * ======================= */

const Footer = () => {
	const footerClass = style['footer'];
	const topSectionClass = style['top-section'];
	const bottomSectionClass = style['bottom-section'];

	return (
		<footer className={footerClass}>
			<div className={topSectionClass}>
				<Links />
				<LanguageSelection />
			</div>
			<div className={bottomSectionClass}>
				<Copyright />
			</div>
		</footer>
	);
};

export default Footer;

/* =======================
 * Private
 * ======================= */

const Links = () => {
	const linksClass = style['links'];
	const linkClass = style['link'];

	return (
		<div className={linksClass}>
			{links.map((link, index) => (
				<NavLink className={linkClass} target={link.target} key={index}>
					{Translate(link.content)}
				</NavLink>
			))}
		</div>
	);
};

const Copyright = () => {
	const copyrightClass = style['copyright'];

	return <div className={copyrightClass}>© Copyright Felis Major | 2022</div>;
};

const LanguageSelection = () => {
	const languageSelectionClass = style['language-selection'];

	return (
		<div className={languageSelectionClass}>
			<select className='button' name='language'>
				<option value='en'>English</option>
				<option value='fr'>Français</option>
			</select>
		</div>
	);
};
