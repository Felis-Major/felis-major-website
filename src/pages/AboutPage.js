// Import localization package
import { useTranslation } from 'react-i18next';

// Import components
import BackgroundContentContainer from '../components/containers/BackgroundContentContainer';
import CenteredContentContainer from '../components/containers/CenteredContentContainer';
import PageHeader from '../components/page-elements/layout/PageHeader';
import PageTitle from '../components/page-elements/text/PageTitle';
import TeamCard from '../components/page-elements/cards/TeamCard';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

function AboutPage() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<PageHeader
				imageUrl='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
				title={t('pageTitle_AboutUs')}
				subTitles={['Blabla who we are']}
			/>

			<BackgroundContentContainer>
				<PageTitle>Team</PageTitle>
				<CenteredContentContainer>
					<TeamCard
						src='https://pbs.twimg.com/profile_images/1553468173436977152/YkUybhHy_400x400.jpg'
						name='Suzanne Clemente'
						jobTitle='CEO'
						twitterProfile='suzclemente'
					/>
					<TeamCard
						src='https://pbs.twimg.com/profile_images/1484651670231470085/4WbLEKMW_400x400.jpg'
						name='Robert Edilber'
						jobTitle='CEO'
						twitterProfile='rsedilber'
					/>
				</CenteredContentContainer>

				<PageTitle>Values</PageTitle>
				<PageTitle>Twitter Feed</PageTitle>
				<PageTitle>Sponsors</PageTitle>
			</BackgroundContentContainer>
			<Footer />
		</>
	);
}

export default AboutPage;
