// Import localization package
import { useTranslation } from 'react-i18next';

// Import components
import Button from '../../components/page-elements/form/buttons/Button';
import CenteredContentContainer from '../../components/containers/CenteredContentContainer';
import ContentContainer from '../../components/containers/ContentContainer';
import PageHeader from '../../components/page-elements/layout/PageHeader';
import PageTitle from '../../components/page-elements/text/PageTitle';

function MessageSentPage() {
	const { t } = useTranslation();

	return (
		<>
			<PageHeader
				imageUrl='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
				title={t('pageTitle_ContactUs')}
				subTitles={['Leave us a message']}
			/>

			<CenteredContentContainer>
				<ContentContainer>
					<PageTitle>✅ Message Sent!</PageTitle>
					<CenteredContentContainer>
						<Button>⬅️ Go Back</Button>
					</CenteredContentContainer>
				</ContentContainer>
			</CenteredContentContainer>
		</>
	);
}

export default MessageSentPage;
