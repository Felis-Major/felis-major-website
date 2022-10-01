// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import PageHeader from '../components/layout/PageHeader';
import ServiceCard from '../components/content/cards/ServiceCard';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
	return (
		<>
			<Header />

			<div className='content'>
				<PageHeader
					title='Our Services'
					subtitle='Our Services'
					imageUrl='https://getwallpapers.com/wallpaper/full/1/d/e/255149.jpg'
				/>

				<section>
					<h1>Services</h1>
					<div className='container flex-centered'>
						<ServiceCard
							imageUrl='https://via.placeholder.com/250x70'
							title='prog'
							description='desc'
							services={['test', 'aaaa', 'aaaaaa']}
						/>
						<ServiceCard
							imageUrl='https://via.placeholder.com/250x70'
							title='design'
							description='desc'
							services={['test', 'aaaa', 'aaaaaa']}
						/>
						<ServiceCard
							imageUrl='https://via.placeholder.com/250x70'
							title='marketing'
							description='desc'
							services={['test', 'aaaa', 'aaaaaa']}
						/>
					</div>
					<div className='container flex-centered'>
						<Link className='button' to='/contact'>
							Contact Us
						</Link>
					</div>
				</section>

				<section>
					<h1>Clients</h1>
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
