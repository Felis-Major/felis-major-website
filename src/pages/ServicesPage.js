// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import PageHeader from '../components/layout/PageHeader';
import ServiceCard from '../components/content/cards/ServiceCard';
import { Link } from 'react-router-dom';
import localizationKeys from '../localization/localization-keys';
import Translate from '../localization/Translate';

const ServicesPage = () => {
	return (
		<>
			<Header />

			<div className='content'>
				<PageHeader
					title={Translate(localizationKeys.servicesPage.pageTitle)}
					subtitle={Translate(localizationKeys.servicesPage.pageSubtitle)}
					imageUrl='https://getwallpapers.com/wallpaper/full/1/d/e/255149.jpg'
				/>

				<section>
					<h1>
						{Translate(localizationKeys.servicesPage.pageSectionServices.title)}
					</h1>
					<div className='container flex-centered'>
						<ServiceCard
							imageUrl='https://via.placeholder.com/250x70'
							title={Translate(
								localizationKeys.servicesPage.pageSectionServices.cards[0].title
							)}
							description={Translate(
								localizationKeys.servicesPage.pageSectionServices.cards[0]
									.description
							)}
							services={[
								Translate(
									localizationKeys.servicesPage.pageSectionServices.cards[0]
										.services[0]
								),
								Translate(
									localizationKeys.servicesPage.pageSectionServices.cards[0]
										.services[1]
								),
								Translate(
									localizationKeys.servicesPage.pageSectionServices.cards[0]
										.services[2]
								),
							]}
						/>
						<ServiceCard
							imageUrl='https://via.placeholder.com/250x70'
							title={Translate(
								localizationKeys.servicesPage.pageSectionServices.cards[1].title
							)}
							description={Translate(
								localizationKeys.servicesPage.pageSectionServices.cards[1]
									.description
							)}
							services={[
								Translate(
									localizationKeys.servicesPage.pageSectionServices.cards[1]
										.services[0]
								),
								Translate(
									localizationKeys.servicesPage.pageSectionServices.cards[1]
										.services[1]
								),
								Translate(
									localizationKeys.servicesPage.pageSectionServices.cards[1]
										.services[2]
								),
							]}
						/>
						<ServiceCard
							imageUrl='https://via.placeholder.com/250x70'
							title={Translate(
								localizationKeys.servicesPage.pageSectionServices.cards[2].title
							)}
							description={Translate(
								localizationKeys.servicesPage.pageSectionServices.cards[2]
									.description
							)}
							services={[
								Translate(
									localizationKeys.servicesPage.pageSectionServices.cards[2]
										.services[0]
								),
								Translate(
									localizationKeys.servicesPage.pageSectionServices.cards[2]
										.services[1]
								),
								Translate(
									localizationKeys.servicesPage.pageSectionServices.cards[2]
										.services[2]
								),
							]}
						/>
					</div>
					<div className='container flex-centered'>
						<Link className='button' to='/contact'>
							{Translate(
								localizationKeys.servicesPage.pageSectionServices
									.contactUsButton
							)}
						</Link>
					</div>
				</section>

				<section>
					<h1>
						{Translate(localizationKeys.servicesPage.pageSectionClients.title)}
					</h1>
					<div className='container flex-centered'>
						<img src='https://via.placeholder.com/250x70' />
						<img src='https://via.placeholder.com/250x70' />
						<img src='https://via.placeholder.com/250x70' />
						<img src='https://via.placeholder.com/250x70' />
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default ServicesPage;
