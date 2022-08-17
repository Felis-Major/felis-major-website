import { Link } from 'react-router-dom';
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

function WasternPage() {
	return (
		<>
			<Header />
			<div className='chose'></div>
			<div className='chose2'>
				<p className='largeText'>Pitch court ici</p>
			</div>
			<div className='page'>
				<br />
				<div className='flexRow'></div>
				<div className='flexRow'>
					<Link to='/contact' className='button'>
						Contact Us
					</Link>
				</div>
				<br></br>
				<br></br>
				<br></br>
			</div>
			<div className='chose2'>
				<h1 className='pageHeader'>Our Clients</h1>
			</div>
			<Footer />
		</>
	);
}

export default WasternPage;
