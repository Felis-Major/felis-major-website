// Import localization package
import { useTranslation } from 'react-i18next';

// Import components
import CenteredContentContainer from '../components/containers/CenteredContentContainer';
import ContentContainer from '../components/containers/ContentContainer';
import Button from '../components/page-elements/form/buttons/Button';
import BackgroundContentContainer from '../components/containers/BackgroundContentContainer';
import ImageLink from '../components/navigation/elements/ImageLink';

// Import resources
import TwitterNormal from '../components/navigation/_resources/imgs/socials/twitter-normal.png';
import TwitterHover from '../components/navigation/_resources/imgs/socials/twitter-hover.png';
import TiktokNormal from '../components/navigation/_resources/imgs/socials/tiktok-normal.png';
import TiktokHover from '../components/navigation/_resources/imgs/socials/tiktok-hover.png';
import InstagramNormal from '../components/navigation/_resources/imgs/socials/instagram-normal.png';
import InstagramHover from '../components/navigation/_resources/imgs/socials/instagram-hover.png';
import DiscordNormal from '../components/navigation/_resources/imgs/socials/discord-normal.png';
import DiscordHover from '../components/navigation/_resources/imgs/socials/discord-hover.png';

// Import styles
import linksPageStyle from './Links.module.css';

function ContactPage() {
	const { t } = useTranslation();

	return (
		<>
			<BackgroundContentContainer
				height='medium'
				url='https://pbs.twimg.com/media/FOD_yWRVUAUi4jD?format=jpg&name=medium'
			/>

			<ContentContainer>
				<CenteredContentContainer direction='column'>
					<div className={linksPageStyle['social-links-container']}>
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
					</div>
					<Button className={linksPageStyle['links-buttons']}>
						💌 Join our mailing list
					</Button>{' '}
					<Button
						className={`${linksPageStyle['links-buttons']} ${linksPageStyle['links-steam-button']}`}
					>
						✨ Wishlist us on Steam!
					</Button>{' '}
					<Button className={linksPageStyle['links-buttons']}>
						👑 Back us on Kickstarter!
					</Button>{' '}
					<Button className={linksPageStyle['links-buttons']}>
						🔎 Read our PressKit
					</Button>
				</CenteredContentContainer>
			</ContentContainer>
		</>
	);
}

export default ContactPage;
