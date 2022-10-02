/* =======================
 * Imports
 * ======================= */

import NavLink from './links/NavLink';
import style from './Footer.module.scss';
import links from './links/links';
import Translate from '../../localization/Translate';
import localizationKeys from '../../localization/localization-keys';
import i18n from '../../localization/i18n';

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
				{/* <LanguageSelection /> */}
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
			<select
				className='button'
				name='language'
				onChange={(e) => i18n.changeLanguage(e.target.value)}
				value={i18n.language}
			>
				<option value='en'>{Translate(localizationKeys.language.en)}</option>
				<option value='fr'>{Translate(localizationKeys.language.fr)}</option>
			</select>
		</div>
	);
};
