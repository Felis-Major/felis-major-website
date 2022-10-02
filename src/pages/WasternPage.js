// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import PageHeader from '../components/layout/PageHeader';
import HorizontalCard from '../components/content/cards/HorizontalCard';
import Translate from '../localization/Translate';
import localizationKeys from '../localization/localization-keys';
import TopBanner from '../imgs/banners/wastern.png';

import ksp1 from '../imgs/ksps/ksp1.png';
import ksp2 from '../imgs/ksps/ksp2.png';
import ksp3 from '../imgs/ksps/ksp3.png';
import ksp4 from '../imgs/ksps/ksp4.png';
import ksp5 from '../imgs/ksps/ksp5.png';

const WasternPage = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	scrollToTop();
	return (
		<>
			<Header />

			<div className='content wastern'>
				<PageHeader
					title={Translate(localizationKeys.wasternPage.pageTitle)}
					// subtitle={Translate(localizationKeys.wasternPage.pageSubtitle)}
					imageUrl={TopBanner}
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
		<section className='page-content'>
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
			imageUrl: ksp1,
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[1].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[1].content
			),
			imageUrl: ksp2,
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[2].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[2].content
			),
			imageUrl: ksp3,
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[3].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[3].content
			),
			imageUrl: ksp4,
		},
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[4].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionKSPs.ksps[4].content
			),
			imageUrl: ksp5,
		},
	];

	return (
		<section className='page-content'>
			{/* <h1>{Translate(localizationKeys.wasternPage.pageSectionKSPs.title)}</h1> */}
			<div className='container flex-centered'>
				{ksps.map((x, index) => (
					<HorizontalCard
						imageUrl={x.imageUrl}
						align={index % 2 == 0 ? 'align-left' : 'align-right'}
						key={index}
					>
						<h2 style={{ textAlign: 'left' }}>{x.title}</h2>
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
		{
			title: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[5].title
			),
			content: Translate(
				localizationKeys.wasternPage.pageSectionFAQ.questions[5].content
			),
		},
	];

	return (
		<section className='page-content'>
			<h1>{Translate(localizationKeys.wasternPage.pageSectionFAQ.title)}</h1>
			<div className='container flex-centered flex-column'>
				{questions.map((x, index) => (
					<div className='card-wide dark-background' key={index}>
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
