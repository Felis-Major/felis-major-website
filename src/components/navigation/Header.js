import style from './Header.module.css';
import ImageLink from './elements/ImageLink';
import NavLink from './elements/NavLink';
import Logo from './_resources/imgs/logo.png';
import TwitterNormal from './_resources/imgs/socials/twitter-normal.png';
import TwitterHover from './_resources/imgs/socials/twitter-hover.png';
import TiktokNormal from './_resources/imgs/socials/tiktok-normal.png';
import TiktokHover from './_resources/imgs/socials/tiktok-hover.png';
import InstagramNormal from './_resources/imgs/socials/instagram-normal.png';
import InstagramHover from './_resources/imgs/socials/instagram-hover.png';
import DiscordNormal from './_resources/imgs/socials/discord-normal.png';
import DiscordHover from './_resources/imgs/socials/discord-hover.png';
import SteamNormal from './_resources/imgs/socials/steam-normal.png';
import SteamHover from './_resources/imgs/socials/steam-hover.png';

// Import localization package
import { useTranslation } from 'react-i18next';

function Header() {
	const { t } = useTranslation();

	return (
		<header className={style['header']}>
			<nav className={style['nav']}>
				<div className={style['logo-container']}>
					<ImageLink link='/' size='80' imgNormal={Logo} imgHovered={Logo} />
				</div>
				<ul className={style['nav-links']}>
					<NavLink target='/about'>{t('nav_AboutUs')}</NavLink>
					<NavLink target='/services'>{t('nav_OurServices')}</NavLink>
					<NavLink target='/wastern'>{t('nav_Wastern')}</NavLink>
					<NavLink target='/press'>{t('nav_Press')}</NavLink>
					<NavLink target='/contact'>{t('nav_ContactUs')}</NavLink>
				</ul>
			</nav>
			<div className={style['socials-container']}>
				<ImageLink
					link='#'
					size='48'
					imgNormal={TwitterNormal}
					imgHovered={TwitterHover}
				/>
				<ImageLink
					link='#'
					size='48'
					imgNormal={TiktokNormal}
					imgHovered={TiktokHover}
				/>
				<ImageLink
					link='#'
					size='48'
					imgNormal={InstagramNormal}
					imgHovered={InstagramHover}
				/>
				<ImageLink
					link='#'
					size='48'
					imgNormal={DiscordNormal}
					imgHovered={DiscordHover}
				/>
				<ImageLink
					link='#'
					size='48'
					imgNormal={SteamNormal}
					imgHovered={SteamHover}
				/>
			</div>
		</header>
	);
}

export default Header;
