// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

import TeamCard from '../components/content/cards/TeamCard';
import Twitter from '../components/content/embed/Twitter';
import PageHeader from '../components/layout/PageHeader';
import localizationKeys from '../localization/localization-keys';
import Translate from '../localization/Translate';
import TopBanner from '../imgs/banners/about.png';
import Card1Picture from '../imgs/portraits/1.png';
import Card2Picture from '../imgs/portraits/2.png';

const AboutPage = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	scrollToTop();
	return (
		<>
			<Header />

			<div className='content about'>
				<PageHeader
					title={Translate(localizationKeys.aboutPage.pageTitle)}
					// subtitle={Translate(localizationKeys.aboutPage.pageSubtitle)}
					imageUrl={TopBanner}
				/>

				<section className='page-content'>
					<div className='container flex-centered'>
						<div className='card-wide light-background'>
							<p>
								{Translate(localizationKeys.aboutPage.pageSectionIntro.content)}
							</p>
						</div>
					</div>
				</section>

				<TeamCards />

				<section className='page-content'>
					<h1>
						{Translate(localizationKeys.aboutPage.pageSectionValues.title)}
					</h1>
					<div className='container flex-centered'>
						<div className='card-wide light-background'>
							<p>
								{Translate(
									localizationKeys.aboutPage.pageSectionValues.content
								)}
							</p>
						</div>
					</div>
				</section>

				<section className='page-content'>
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
			handle: 'suzclemente',
			portraitUrl: Card2Picture,
		},
		{
			name: localizationKeys.aboutPage.pageSectionTeam.teamcards[1].name,
			job: localizationKeys.aboutPage.pageSectionTeam.teamcards[1].job,
			handle: 'rsedilber',
			portraitUrl: Card1Picture,
		},
	];

	return (
		<section className='page-content'>
			<h1>{Translate(localizationKeys.aboutPage.pageSectionTeam.title)}</h1>
			<div className='container flex-centered'>
				{cards.map((x, index) => (
					<TeamCard
						name={Translate(x.name)}
						jobTitle={Translate(x.job)}
						handle={x.handle}
						portraitUrl={x.portraitUrl}
						key={index}
					/>
				))}
			</div>
		</section>
	);
};
