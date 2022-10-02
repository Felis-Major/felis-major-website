// Import localization package
import { useTranslation } from 'react-i18next';

// Import styles
import linksPageStyle from './LinksPage.module.css';

// Import components
import CenteredContentContainer from '../../../components/containers/CenteredContentContainer';
import ContentContainer from '../../../components/containers/ContentContainer';
import Button from '../../../components/page-elements/form/buttons/Button';
import PageBlock from '../../../components/containers/PageBlock';
import ImageLink from '../../../components/navigation/elements/ImageLink';

// Import resources
import TwitterNormal from '../../../imgs/logos/socials/twitter-normal.png';
import TwitterHover from '../../../imgs/logos/socials/twitter-hover.png';
import InstagramNormal from '../../../imgs/logos/socials/instagram-normal.png';
import InstagramHover from '../../../imgs/logos/socials/instagram-hover.png';

function ContactPage() {
	const { t } = useTranslation();

	return (
		<>
			<PageBlock
				height='350'
				backgroundUrl='https://pbs.twimg.com/media/FOD_yWRVUAUi4jD?format=jpg&name=medium'
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
							imgNormal={InstagramNormal}
							imgHovered={InstagramHover}
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
