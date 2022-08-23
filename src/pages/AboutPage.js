// Import localization package
import { useTranslation } from 'react-i18next';
import localizationKeys from '../localization/localization-keys';

// Import components
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import BackgroundContentContainer from '../components/containers/BackgroundContentContainer';
import CenteredContentContainer from '../components/containers/CenteredContentContainer';
import PageHeader from '../components/page-elements/layout/PageHeader';
import TeamCard from '../components/page-elements/cards/TeamCard';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import PageText from '../components/page-elements/text/PageText';
import PageSection from '../components/page-elements/layout/PageSection';

function AboutPage() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<PageHeader
				imageUrl='https://via.placeholder.com/2000x400'
				title={t(localizationKeys.pageTitleAboutUs)}
				subtitle={t(localizationKeys.pageSubtitleAboutUs)}
			/>

			<BackgroundContentContainer>
				<PageSection title={t(localizationKeys.pageSectionTeam)}>
					<CenteredContentContainer>
						<TeamCard
							src='https://via.placeholder.com/400'
							name='Suzanne Clemente'
							jobTitle={t(localizationKeys.pageTeamCardCEO)}
							twitterProfile='suzclemente'
						/>
						<TeamCard
							src='https://via.placeholder.com/400'
							name='Robert Edilber'
							jobTitle={t(localizationKeys.pageTeamCardCEO)}
							twitterProfile='rsedilber'
						/>
					</CenteredContentContainer>
				</PageSection>

				<PageSection title={t(localizationKeys.pageSectionValues)}>
					<PageText>
						{t(localizationKeys.pageTextValues)}
						<ul>
							<li>{t(localizationKeys.pageTextValuesList1)}</li>
							<li>{t(localizationKeys.pageTextValuesList2)}</li>
						</ul>
					</PageText>
				</PageSection>

				<PageSection title={t(localizationKeys.pageSectionTwitterFeed)}>
					<TwitterTimelineEmbed
						tweetLimit='2'
						sourceType='profile'
						screenName='felismajorrr'
						options={{ width: 700 }}
						theme='dark'
					/>
				</PageSection>
			</BackgroundContentContainer>
			<Footer />
		</>
	);
}

export default AboutPage;
