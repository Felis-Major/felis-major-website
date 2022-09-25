// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import PageHeader from '../components/page-elements/PageHeader';

function ContactPage() {
	return (
		<>
			<Header />

			<PageHeader
				title='Contact Us'
				subtitle='Contact'
				imageUrl='https://getwallpapers.com/wallpaper/full/d/3/2/199080.jpg'
			/>

			<Footer />
		</>
	);
}

export default ContactPage;
