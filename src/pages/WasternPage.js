// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import PageHeader from '../components/page-elements/PageHeader';

function WasternPage() {
	return (
		<>
			<Header />

			<PageHeader
				title='Wastern'
				subtitle='Bla bla game'
				imageUrl='https://wallpaperheart.com/wp-content/uploads/2018/08/hd-wallpaper-1366x768-11.jpg'
			/>

			<Footer />
		</>
	);
}

export default WasternPage;
