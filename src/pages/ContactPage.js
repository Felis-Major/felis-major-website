// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import PageHeader from '../components/layout/PageHeader';

const ContactPage = () => {
	return (
		<>
			<Header />

			<div className='content'>
				<PageHeader
					title='Contact Us'
					subtitle='Contact'
					imageUrl='https://getwallpapers.com/wallpaper/full/d/3/2/199080.jpg'
				/>

				<section>
					<form className='container'>
						{/* @ To contact@felismajor.com */}
						<a className='button' href='mailto:contact@felismajor.com'>
							to: contact@felismajor.com
						</a>

						{/* Select subject */}
						<select className='button' name='language'>
							<option value='services'>Our Services</option>
							<option value='press'>Press</option>
							<option value='streamer'>Streamer/Influencer</option>
							<option value='partnership'>Partnership</option>
							<option value='other'>Other</option>
						</select>

						{/* Your email */}
						<input className='text-box' placeholder='Your e-mail' />

						{/* Your message */}
						<textarea className='text-box' placeholder='Your message' />

						{/* Submit form */}
						<button className='button' type='submit'>
							Send Message
						</button>
					</form>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default ContactPage;
