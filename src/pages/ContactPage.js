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

function ContactPage() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<PageHeader
				imageUrl='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
				title={t('pageTitle_ContactUs')}
				subTitles={['Leave us a message']}
			/>

			<ContentContainer>
				<CenteredContentContainer direction='column'>
					<ButtonURL
						className={contactPageStyle['contact-form-element']}
						url='mailto:contact@felismajor.com'
					>
						to: contact@felismajor.com
					</ButtonURL>
					<TextField
						className={contactPageStyle['contact-form-element']}
						placeholder='Enter your email'
					/>
					<Dropdown
						className={contactPageStyle['contact-form-element']}
						options={[
							{ value: 'services', text: 'Request Our services' },
							{ value: 'press', text: 'Press' },
							{ value: 'influencers', text: 'Streamers/Influencers' },
							{ value: 'partnership', text: 'Partnership' },
							{ value: 'other', text: 'Other...' },
						]}
					/>
					<TextArea
						className={contactPageStyle['contact-form-element']}
						placeholder='Leave us a message...'
					/>
					<Button className={contactPageStyle['contact-form-submit']}>
						✨ Send Message ✨
					</Button>
				</CenteredContentContainer>
			</ContentContainer>
			<Footer />
		</>
	);
}

export default ContactPage;
