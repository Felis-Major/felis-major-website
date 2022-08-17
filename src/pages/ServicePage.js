import Button from '../components/page-elements/form/Button';
import BackgroundContentContainer from '../components/containers/BackgroundContentContainer';
import PageHeader from '../components/page-elements/layout/PageHeader';
import PageSeparator from '../components/page-elements/layout/PageSeparator';
import PageTitle from '../components/page-elements/text/PageTitle';
import ServiceCard from '../components/page-elements/cards/ServiceCard';
import CenteredContentContainer from '../components/containers/CenteredContentContainer';
import PresetBackgroundContentContainer from '../components/containers/Backgrounds/PresetBackgroundContentContainer';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

function ServicesPage() {
	return (
		<>
			<Header />
			<PageHeader
				imageUrl='https://1.bp.blogspot.com/-I3pzlkitwQA/Uxiqls0cb8I/AAAAAAAALbc/q93rRcXzYp4/s1600/wallpaper_51.jpg'
				title='Our Services'
				subTitles={[
					'Contrats a partir de blabla',
					'Voila tous nos services choses',
				]}
			/>

			<PresetBackgroundContentContainer background='dots'>
				<CenteredContentContainer>
					<ServiceCard
						imageUrl='http://images6.fanpop.com/image/photos/40500000/Cat-cats-40547181-1680-1050.jpg'
						title='Design'
						description='description...'
						separator='⭐'
						services={[
							'Game Design & Narration Consulting',
							'Serious Games & Virtual Museums',
							'Training & Conferences',
						]}
					/>
					<ServiceCard
						imageUrl='https://petsreporter.com/wp-content/uploads/2020/11/Weird-Cat-Behaviors-Explained-3-1536x1152.jpg'
						title='Programming'
						description='description...'
						separator='⭐'
						services={['Webdesign', 'Unity Project Consulting', 'Training']}
					/>
					<ServiceCard
						imageUrl='https://images2.fanpop.com/image/photos/13400000/Cat-cats-13494211-1600-1067.jpg'
						title='Comms & Marketing'
						description='description...'
						separator='⭐'
						services={[
							'Communications Strategy',
							'Web Content Creation',
							'Training & Conferences',
						]}
					/>
				</CenteredContentContainer>
				<CenteredContentContainer>
					<Button>📫 Contact Us</Button>
				</CenteredContentContainer>
			</PresetBackgroundContentContainer>

			<PageSeparator
				title='Our Clients'
				subTitles={['Current & Past clients']}
			/>

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
