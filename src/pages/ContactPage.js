// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import PageHeader from '../components/layout/PageHeader';
import Translate from '../localization/Translate';
import localizationKeys from '../localization/localization-keys';
import TopBanner from '../imgs/banners/contact.png';

const ContactPage = () => {
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	scrollToTop();
	return (
		<>
			<Header />

			<div className='content'>
				<PageHeader
					title={Translate(localizationKeys.contactPage.pageTitle)}
					// subtitle={Translate(localizationKeys.contactPage.pageSubtitle)}
					imageUrl={TopBanner}
				/>

				<section className='page-content' style={{ textAlign: 'center' }}>
					<div className='container flex-centered flex-column'>
						<p>{Translate(localizationKeys.contactPage.pageStatus)}</p>
						<a href='https://twitter.com/felismajorrr'>
							{Translate(localizationKeys.contactUsOnTwitter)}
						</a>
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default ContactPage;

/*
<section>
	<form className='container'>
		<a className='button' href='mailto:contact@felismajor.com'>
			to: contact@felismajor.com
		</a>


		<select className='button' name='language'>
			<option value='services'>Our Services</option>
			<option value='press'>Press</option>
			<option value='streamer'>Streamer/Influencer</option>
			<option value='partnership'>Partnership</option>
			<option value='other'>Other</option>
		</select>


		<input className='text-box' placeholder='Your e-mail' />


		<textarea className='text-box' placeholder='Your message' />


		<button className='button' type='submit'>
			Send Message
		</button>
	</form>
</section>
*/
