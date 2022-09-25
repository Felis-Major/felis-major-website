// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';

import TeamCard from '../components/page-elements/cards/TeamCard';
import LastTweet from '../components/page-elements/LastTweet';
import PageHeader from '../components/page-elements/PageHeader';

function AboutPage() {
	return (
		<>
			<Header />

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
					/>
					<TeamCard
						name='Robert Edilber wwww'
						jobTitle='CEO'
						handle='rsedilber'
					/>
				</div>
			</section>

			<section>
				<h1>Our Values</h1>
				<div className='container'>
					<p>
						Test value lalalala bla blu blop touptup babababa bububub bibibibibi
						aaaaaaaaaaa yoyoyoyoyyyyy
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
					<LastTweet width='700' handle='felismajorrr' />
				</div>
			</section>

			<Footer />
		</>
	);
}

export default AboutPage;
