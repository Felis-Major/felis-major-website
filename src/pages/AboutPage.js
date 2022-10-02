// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

import TeamCard from '../components/content/cards/TeamCard';
import Twitter from '../components/content/embed/Twitter';
import PageHeader from '../components/layout/PageHeader';
import localizationKeys from '../localization/localization-keys';
import Translate from '../localization/Translate';

const AboutPage = () => {
	return (
		<>
			<Header />

			<div className='content'>
				<PageHeader
					title={Translate(localizationKeys.aboutPage.pageTitle)}
					subtitle={Translate(localizationKeys.aboutPage.pageSubtitle)}
					imageUrl='https://pbs.twimg.com/profile_banners/1353208432032178176/1662896389/1500x500'
				/>

				<TeamCards />

				<section>
					<h1>
						{Translate(localizationKeys.aboutPage.pageSectionValues.title)}
					</h1>
					<div className='container'>
						{Translate(localizationKeys.aboutPage.pageSectionValues.content)}
					</div>
				</section>

				<section>
					<h1>
						{Translate(localizationKeys.aboutPage.pageSectionTwitterFeed.title)}
					</h1>
					<div className='container flex-centered'>
						<Twitter width='700' handle='felismajorrr' />
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default AboutPage;

const TeamCards = () => {
	const cards = [
		{
			name: localizationKeys.aboutPage.pageSectionTeam.teamcards[0].name,
			job: localizationKeys.aboutPage.pageSectionTeam.teamcards[0].job,
			handle: localizationKeys.aboutPage.pageSectionTeam.teamcards[0].handle,
			portraitUrl: 'https://via.placeholder.com/1000',
		},
		{
			name: localizationKeys.aboutPage.pageSectionTeam.teamcards[1].name,
			job: localizationKeys.aboutPage.pageSectionTeam.teamcards[1].job,
			handle: localizationKeys.aboutPage.pageSectionTeam.teamcards[1].handle,
			portraitUrl: 'https://via.placeholder.com/1000',
		},
	];

	return (
		<section>
			<h1>{Translate(localizationKeys.aboutPage.pageSectionTeam.title)}</h1>
			<div className='container flex-centered'>
				{cards.map((x, index) => (
					<TeamCard
						name={Translate(x.name)}
						jobTitle={Translate(x.job)}
						handle={Translate(x.handle)}
						portraitUrl={x.portraitUrl}
						key={index}
					/>
				))}
			</div>
		</section>
	);
};
