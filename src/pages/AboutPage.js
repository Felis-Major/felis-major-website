// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

import TeamCard from '../components/content/cards/TeamCard';
import Twitter from '../components/content/embed/Twitter';
import PageHeader from '../components/layout/PageHeader';

const AboutPage = () => {
	return (
		<>
			<Header />

			<div className='content'>
				<PageHeader
					title='About Us'
					subtitle='The teaam bla bla bla'
					imageUrl='https://pbs.twimg.com/profile_banners/1353208432032178176/1662896389/1500x500'
				/>

				<section>
					<h1>Team</h1>
					<div className='container flex-centered'>
						<TeamCard
							name='Robert Edilber wwww'
							jobTitle='CEO'
							handle='rsedilber'
							portraitUrl='https://via.placeholder.com/1000x1000'
						/>
						<TeamCard
							name='Robert Edilber wwww'
							jobTitle='CEO'
							handle='rsedilber'
							portraitUrl='https://via.placeholder.com/1000x1000'
						/>
					</div>
				</section>

				<section>
					<h1>Our Values</h1>
					<div className='container'>
						<p>
							Test value lalalala bla blu blop touptup babababa bububub
							bibibibibi aaaaaaaaaaa yoyoyoyoyyyyy
						</p>
						<ul>
							<li>Value 1</li>
							<li>Value 2</li>
							<li>Value 3</li>
						</ul>
					</div>
				</section>

				<section>
					<h1>Twitter Feed</h1>
					<div className='container flex-centered'>
						<Twitter width='700' handle='felismajorrr' />
					</div>
				</section>
			</div>

			<Footer />
		</>
	);
};

export default AboutPage;
