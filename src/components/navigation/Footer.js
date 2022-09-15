// Import CSS Module
import footerStyle from './Footer.module.css';
import navlinkStyle from './NavLink.module.css';
// Import localization package
import { useDeviceTypeChanged } from '../../utilities/useOnWindowResize';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

// Import localization package
import i18n from '../../localization/i18n';
import { useTranslation } from 'react-i18next';
import Dropdown from '../page-elements/form/buttons/Dropdown';
import localizationKeys from '../../localization/localization-keys';

export default function Footer() {
	const { t } = useTranslation();

	function changeLocale(newLocale) {
		i18n.changeLanguage(newLocale);
	}

	const [device, setDevice] = useState('desktop');
	useDeviceTypeChanged(setDevice);

	const navLinksClass = footerStyle['nav-links'];
	const navLinksDeviceClass = footerStyle[`nav-links__${device}`];
	const navLinksClasses = `${navLinksClass} ${navLinksDeviceClass}`;

	return (
		<footer className={footerStyle['footer']}>
			<nav className={footerStyle['nav']}>
				<ul className={navLinksClasses}>
					<NavLink target="/about">{t(localizationKeys.navAboutUs)}</NavLink>
					<NavLink target="/services">
						{t(localizationKeys.navServices)}
					</NavLink>
					<NavLink target="/wastern">{t(localizationKeys.navWastern)}</NavLink>
					<NavLink target="/contact">
						{t(localizationKeys.navContactUs)}
					</NavLink>
				</ul>
			</nav>
			<Dropdown
				className={footerStyle['footer-dropdown']}
				onChange={changeLocale}
				options={[
					{ value: 'en', text: 'EN' },
					{ value: 'fr', text: 'FR' },
				]}
			/>
		</footer>
	);
}

function NavLink(props) {
	const [device, setDevice] = useState('desktop');
	useDeviceTypeChanged(setDevice);

	const location = useLocation();
	const navLinkClass = navlinkStyle['nav-link'];
	const navLinkActiveClass = navlinkStyle['nav-link__active'];
	const navLinkHeaderClass = footerStyle[`nav-link__${device}`];

	let classes = `${navLinkClass} ${navLinkHeaderClass}`;

	if (location.pathname == props.target) {
		classes += ` ${navLinkActiveClass}`;
	}

	return (
		<li className={classes}>
			<Link to={props.target}>{props.children}</Link>
		</li>
	);
}
