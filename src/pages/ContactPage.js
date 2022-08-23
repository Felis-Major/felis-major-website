// Import localization package
import { useTranslation } from 'react-i18next';

// Import components
import CenteredContentContainer from '../components/containers/CenteredContentContainer';
import PageHeader from '../components/page-elements/layout/PageHeader';
import TextField from '../components/page-elements/form/text-inputs/TextField';
import ContentContainer from '../components/containers/ContentContainer';
import TextArea from '../components/page-elements/form/text-inputs/TextArea';
import Button from '../components/page-elements/form/buttons/Button';
import Dropdown from '../components/page-elements/form/buttons/Dropdown';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

// Import styles
import contactPageStyle from './ContactPage.module.css';
import ButtonURL from '../components/page-elements/form/buttons/actions/ButtonURL';
import localizationKeys from '../localization/localization-keys';

function ContactPage() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<PageHeader
				imageUrl='https://via.placeholder.com/2000x400'
				title={t(localizationKeys.pageTitleContactUs)}
				subtitle={t(localizationKeys.pageSubtitleContactUs)}
			/>

			<ContentContainer>
				<CenteredContentContainer direction='column'>
					<ButtonURL
						className={contactPageStyle['contact-form-element']}
						url='mailto:contact@felismajor.com'
					>
						{t(localizationKeys.pageFormButtonTo)}: contact@felismajor.com
					</ButtonURL>
					<TextField
						className={contactPageStyle['contact-form-element']}
						placeholder={t(localizationKeys.pageFormPlaceholderEnterEmail)}
					/>
					<Dropdown
						className={contactPageStyle['contact-form-element']}
						options={[
							{
								value: 'services',
								text: t(localizationKeys.pageFormDropdownRequestServices),
							},
							{
								value: 'press',
								text: t(localizationKeys.pageFormDropdownPress),
							},
							{
								value: 'influencers',
								text: t(localizationKeys.pageFormDropdownInfluencers),
							},
							{
								value: 'partnership',
								text: t(localizationKeys.pageFormDropdownPartnership),
							},
							{
								value: 'other',
								text: t(localizationKeys.pageFormDropdownOther),
							},
						]}
					/>
					<TextArea
						className={contactPageStyle['contact-form-element']}
						placeholder={t(localizationKeys.pageFormPlaceholderLeaveMessage)}
					/>
					<Button className={contactPageStyle['contact-form-submit']}>
						✨ {t(localizationKeys.pageFormButtonSendMessage)} ✨
					</Button>
				</CenteredContentContainer>
			</ContentContainer>
			<Footer />
		</>
	);
}

export default ContactPage;
