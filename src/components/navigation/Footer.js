// Import CSS Module
import style from './Footer.module.css';

// Default imports
import NavLink from './elements/NavLink';

// Import localization package
import i18n from '../../localization/i18n';
import { useTranslation } from 'react-i18next';
import Dropdown from '../page-elements/form/Dropdown';

function Header() {
	const { t } = useTranslation();

	function changeLocale(newLocale) {
		i18n.changeLanguage(newLocale);
	}

	return (
		<footer className={style['footer']}>
			<nav className={style['nav']}>
				<ul className={style['nav-links']}>
					<NavLink size='small' target='/about'>
						{t('nav_AboutUs')}
					</NavLink>
					<NavLink size='small' target='/services'>
						{t('nav_OurServices')}
					</NavLink>
					<NavLink size='small' target='/wastern'>
						{t('nav_Wastern')}
					</NavLink>
					<NavLink size='small' target='/press'>
						{t('nav_Press')}
					</NavLink>
					<NavLink size='small' target='/contact'>
						{t('nav_ContactUs')}
					</NavLink>
				</ul>
			</nav>
			<Dropdown
				className={style['footer-dropdown']}
				onChange={changeLocale}
				options={[
					{ value: 'en', text: 'EN' },
					{ value: 'fr', text: 'FR' },
				]}
			/>
		</footer>
	);
}

export default Header;
