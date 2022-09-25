import Header from '../../../components/navigation/Header';
import Footer from '../../../components/navigation/Footer';
import TeamCard from './TeamCard';

import style from './PressPage.module.css';

function PressPage() {
	return (
		<>
			<Header />

			<section>
				<h1>Team</h1>
				<div className='container flex'>
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
				<div className='container flex'>
					<TwitterFeed />
				</div>
			</section>

			<section>
				<h1>Sponsors</h1>
			</section>

			<Footer />
		</>
	);
}

export default PressPage;

const TwitterFeed = () => {
	window.twttr = (function (d, s, id) {
		var js,
			fjs = d.getElementsByTagName(s)[0],
			t = window.twttr || {};
		if (d.getElementById(id)) return t;
		js = d.createElement(s);
		js.id = id;
		js.src = 'https://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js, fjs);
		t._e = [];
		t.ready = function (f) {
			t._e.push(f);
		};
		return t;
	})(document, 'script', 'twitter-wjs');

	return (
		<a
			class='twitter-timeline'
			data-width='700'
			data-dnt='true'
			data-theme='dark'
			data-tweet-limit='1'
			href='https://twitter.com/felismajorrr?ref_src=twsrc%5Etfw'
		>
			Tweets by felismajorrr
		</a>
	);
};
