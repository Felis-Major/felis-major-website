/* =======================
 * Imports
 * ======================= */

import NavLink from './content/NavLink';
import style from './Footer.module.scss';

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
	const links = [
		{ key: 'a', target: '#', content: 'About Us' },
		{ key: 'b', target: '#', content: 'Our Services' },
		{ key: 'c', target: '#', content: 'Wastern' },
		{ key: 'd', target: '#', content: 'Press' },
		{ key: 'e', target: '#', content: 'Contact Us' },
	];

	const linksClass = style['links'];
	const linkClass = style['link'];

	return (
		<div className={linksClass}>
			{links.map((link) => (
				<NavLink className={linkClass} target={link.target} key={link.key}>
					{link.content}
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
			<select className='form-element button' name='language'>
				<option value='en'>English</option>
				<option value='fr'>Français</option>
			</select>
		</div>
	);
};
