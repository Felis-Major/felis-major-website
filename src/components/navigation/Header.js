import headerStyle from './Header.module.css';
import navlinkStyle from './NavLink.module.css';
import ImageLink from './elements/ImageLink';
import React, { useState } from 'react';
import localizationKeys from '../../localization/localization-keys';

// Import resources
import Logo from '../../imgs/logos/felis-major/felis-major-logo-text.png';
import TwitterNormal from '../../imgs/logos/socials/twitter-normal.png';
import TwitterHover from '../../imgs/logos/socials/twitter-hover.png';
import InstagramNormal from '../../imgs/logos/socials/instagram-normal.png';
import InstagramHover from '../../imgs/logos/socials/instagram-hover.png';

// Import localization package
import { useTranslation } from 'react-i18next';
import { useDeviceTypeChanged } from '../../utilities/useOnWindowResize';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
	const [device, setDevice] = useState('desktop');
	useDeviceTypeChanged(setDevice);

	return (
		<header className={headerStyle['header']}>
			<nav className={headerStyle['nav']}>
				<div className={headerStyle['logo-container']}>
					<ImageLink
						link='/'
						size={{ desktop: 200, tablet: 150, mobile: 100 }[device]}
						imgNormal={Logo}
						imgHovered={Logo}
					/>
				</div>
				{
					{
						desktop: <NavLinks />,
						tablet: <NavLinks />,
						mobile: <></>,
					}[device]
				}
			</nav>
			{
				{
					desktop: <SocialLinks />,
					tablet: <></>,
					mobile: <></>,
				}[device]
			}
		</header>
	);
}

function NavLinks() {
	const { t } = useTranslation();

	const [device, setDevice] = useState('desktop');
	useDeviceTypeChanged(setDevice);

	const navLinksClass = headerStyle['nav-links'];
	const navLinksDeviceClass = headerStyle[`nav-links__${device}`];

	const classes = `${navLinksClass} ${navLinksDeviceClass}`;

	return (
		<ul className={classes}>
			<NavLink target='/about'>{t(localizationKeys.navAboutUs)}</NavLink>
			<NavLink target='/services'>{t(localizationKeys.navServices)}</NavLink>
			<NavLink target='/wastern'>{t(localizationKeys.navWastern)}</NavLink>
			<NavLink target='/contact'>{t(localizationKeys.navContactUs)}</NavLink>
		</ul>
	);
}

function NavLink(props) {
	const [device, setDevice] = useState('desktop');
	useDeviceTypeChanged(setDevice);

	const location = useLocation();
	const navLinkClass = navlinkStyle['nav-link'];
	const navLinkActiveClass = navlinkStyle['nav-link__active'];
	const navLinkHeaderClass = headerStyle[`nav-link__${device}`];

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

function SocialLinks() {
	return (
		<div className={headerStyle['socials-container']}>
			<ImageLink
				link='#'
				size='48'
				imgNormal={TwitterNormal}
				imgHovered={TwitterHover}
			/>
			<ImageLink
				link='#'
				size='48'
				imgNormal={InstagramNormal}
				imgHovered={InstagramHover}
			/>
		</div>
	);
}
