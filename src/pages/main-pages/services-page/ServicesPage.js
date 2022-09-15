// Import localization package
import { useTranslation } from 'react-i18next';
import localizationKeys from '../../../localization/localization-keys';

// Import styles
import servicePageStyle from './ServicesPage.module.css';

// Import components
import Header from '../../../components/navigation/Header';
import Footer from '../../../components/navigation/Footer';
import PageBlock from '../../../components/containers/PageBlock';
import PageHeader from '../../../components/page-elements/layout/PageHeader';
import PageSeparator from '../../../components/page-elements/layout/PageSeparator';
import ServiceCard from '../../../components/page-elements/cards/ServiceCard';
import CenteredContentContainer from '../../../components/containers/CenteredContentContainer';
import Button from '../../../components/page-elements/form/buttons/Button';

function ServicesPage() {
	const { t } = useTranslation();

	let designCardArray = [];
	designCardArray.push(t(localizationKeys.pageTeamCardDesignList1));
	designCardArray.push(t(localizationKeys.pageTeamCardDesignList2));
	designCardArray.push(t(localizationKeys.pageTeamCardDesignList3));

	let programmingCardArray = [];
	programmingCardArray.push(t(localizationKeys.pageTeamCardProgrammingList1));
	programmingCardArray.push(t(localizationKeys.pageTeamCardProgrammingList2));
	programmingCardArray.push(t(localizationKeys.pageTeamCardProgrammingList3));

	let marketingCardArray = [];
	marketingCardArray.push(t(localizationKeys.pageTeamCardMarketingList1));
	marketingCardArray.push(t(localizationKeys.pageTeamCardMarketingList2));
	marketingCardArray.push(t(localizationKeys.pageTeamCardMarketingList3));

	return (
		<>
			<Header />
			<PageHeader
				imageUrl="https://via.placeholder.com/2000x400"
				title={t(localizationKeys.pageTitleServices)}
				subtitle={t(localizationKeys.pageSubtitleServices)}
			/>

			<PageBlock backgroundUrl="https://via.placeholder.com/250x70">
				<CenteredContentContainer>
					<ServiceCard
						imageUrl="https://via.placeholder.com/250x70"
						title={t(localizationKeys.pageTeamCardDesign)}
						description={t(localizationKeys.pageTeamCardDesignDescription)}
						separator="⭐"
						services={designCardArray}
					/>
					<ServiceCard
						imageUrl="https://via.placeholder.com/250x70"
						title={t(localizationKeys.pageTeamCardProgramming)}
						description={t(localizationKeys.pageTeamCardProgrammingDescription)}
						separator="⭐"
						services={programmingCardArray}
					/>
					<ServiceCard
						imageUrl="https://via.placeholder.com/250x70"
						title={t(localizationKeys.pageTeamCardMarketing)}
						description={t(localizationKeys.pageTeamCardMarketingDescription)}
						separator="⭐"
						services={marketingCardArray}
					/>
				</CenteredContentContainer>
				<CenteredContentContainer>
					<Button mode="link" target="/contact">
						📫 {t(localizationKeys.pageTitleContactUs)}
					</Button>
				</CenteredContentContainer>
			</PageBlock>

			<PageSeparator title={t(localizationKeys.pageTitleClients)} />

			<PageBlock>
				<CenteredContentContainer>
					<img
						className={servicePageStyle['client-logo']}
						src="https://via.placeholder.com/450x100"
					/>
					<img
						className={servicePageStyle['client-logo']}
						src="https://via.placeholder.com/450x100"
					/>
					<img
						className={servicePageStyle['client-logo']}
						src="https://via.placeholder.com/450x100"
					/>
				</CenteredContentContainer>
			</PageBlock>
			<Footer />
		</>
	);
}

export default ServicesPage;
