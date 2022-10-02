// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import PageHeader from '../components/layout/PageHeader';
import HorizontalCard from '../components/content/cards/HorizontalCard';
import Translate from '../localization/Translate';
import localizationKeys from '../localization/localization-keys';

const WasternPage = () => {
	return (
		<>
			<Header />

			<div className='content'>
				<PageHeader
					title={Translate(localizationKeys.wasternPage.pageTitle)}
					subtitle={Translate(localizationKeys.wasternPage.pageSubtitle)}
					imageUrl='https://wallpaperheart.com/wp-content/uploads/2018/08/hd-wallpaper-1366x768-11.jpg'
				/>
				<Pitch />
				<KSPs />
				<FAQ />
			</div>

			<Footer />
		</>
	);
};

export default WasternPage;

const Pitch = () => {
	return (
		<section>
			<h1>{Translate(localizationKeys.wasternPage.pageSectionPitch.title)}</h1>
			<div className='container flex-centered flex-column'>
				<div className='card-wide dark-background'>
					<p>
						<b>
							{Translate(
								localizationKeys.wasternPage.pageSectionPitch.pitchTitle
							)}
						</b>
					</p>
					<p>
						{Translate(
							localizationKeys.wasternPage.pageSectionPitch.pitchContent
						)}
					</p>
				</div>
			</div>
		</section>
	);
};

const KSPs = () => {
	const ksps = [
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[0].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[0].content
			),
			imageUrl: 'https://via.placeholder.com/1000x1000',
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[1].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[1].content
			),
			imageUrl: 'https://via.placeholder.com/1000x1000',
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[2].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[2].content
			),
			imageUrl: 'https://via.placeholder.com/1000x1000',
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[3].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[3].content
			),
			imageUrl: 'https://via.placeholder.com/1000x1000',
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[4].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[4].content
			),
			imageUrl: 'https://via.placeholder.com/1000x1000',
		},
	];

	return (
		<section>
			<h1>{Translate(localizationKeys.wasternPage.pageSectionKSPs.title)}</h1>
			<div className='container flex-centered'>
				{ksps.map((x, index) => (
					<HorizontalCard
						imageUrl={x.imageUrl}
						align={index % 2 == 0 ? 'align-left' : 'align-right'}
						key={index}
					>
						<h2>{x.title}</h2>
						<p>{x.content}</p>
					</HorizontalCard>
				))}
			</div>
		</section>
	);
};

const FAQ = () => {
	const questions = [
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[0].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[0].content
			),
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[1].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[1].content
			),
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[2].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[2].content
			),
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[3].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[3].content
			),
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[4].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[4].content
			),
		},
	];

	return (
		<section>
			<h1>{Translate(localizationKeys.wasternPage.pageSectionFAQ.title)}</h1>
			<div className='container flex-centered flex-column'>
				{questions.map((x, index) => (
					<div className='card-wide light-background' key={index}>
						<p>
							<b>{x.title}</b>
						</p>
						<p>{x.content}</p>
					</div>
				))}
			</div>
		</section>
	);
};
