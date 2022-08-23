// Import localization package
import { useTranslation } from 'react-i18next';
import localizationKeys from '../localization/localization-keys';

// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import BackgroundContentContainer from '../components/containers/BackgroundContentContainer';
import PageHeader from '../components/page-elements/layout/PageHeader';
import PageSeparator from '../components/page-elements/layout/PageSeparator';
import ServiceCard from '../components/page-elements/cards/ServiceCard';
import CenteredContentContainer from '../components/containers/CenteredContentContainer';
import PresetBackgroundContentContainer from '../components/containers/Backgrounds/PresetBackgroundContentContainer';
import ButtonPage from '../components/page-elements/form/buttons/actions/ButtonPage';

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
				imageUrl=''
				title={t(localizationKeys.pageTitleServices)}
				subtitle={t(localizationKeys.pageSubtitleServices)}
			/>

			<PresetBackgroundContentContainer background='dots'>
				<CenteredContentContainer>
					<ServiceCard
						imageUrl=''
						title={t(localizationKeys.pageTeamCardDesign)}
						description={t(localizationKeys.pageTeamCardDesignDescription)}
						separator='⭐'
						services={designCardArray}
					/>
					<ServiceCard
						imageUrl=''
						title={t(localizationKeys.pageTeamCardProgramming)}
						description={t(localizationKeys.pageTeamCardProgrammingDescription)}
						separator='⭐'
						services={programmingCardArray}
					/>
					<ServiceCard
						imageUrl=''
						title={t(localizationKeys.pageTeamCardMarketing)}
						description={t(localizationKeys.pageTeamCardMarketingDescription)}
						separator='⭐'
						services={marketingCardArray}
					/>
				</CenteredContentContainer>
				<CenteredContentContainer>
					<ButtonPage to='/contact'>
						📫 {t(localizationKeys.pageTitleContactUs)}
					</ButtonPage>
				</CenteredContentContainer>
			</PresetBackgroundContentContainer>

			<PageSeparator title={t(localizationKeys.pageTitleClients)} />

			<BackgroundContentContainer>
				<CenteredContentContainer>
					<img
						height='50'
						src='https://jtech.ampittec.com/wp-content/uploads/2019/04/logo_scalian-1-1-300x35.png'
					/>
					<img
						height='50'
						src='https://www.cae.com/assets/images/cae-logos/new-cae-white.png'
					/>
					<img
						height='50'
						src='https://i2.wp.com/www.verifiedmom.com/wp-content/uploads/2014/07/Netflix_Logo_Print_OneColorPMS.png?fit=8685%2C2333&ssl=1'
					/>
				</CenteredContentContainer>
			</BackgroundContentContainer>
			<Footer />
		</>
	);
}

export default ServicesPage;
