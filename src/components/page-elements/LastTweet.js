const LastTweet = (props) => {
	window.twttr = (function (d, s, id) {
		const getFjs = () => {
			return d.getElementsByTagName(s)[0];
		};

		let js = null;
		let fjs = getFjs();
		let t = window.twttr || {};

		// Remove script element on reload if it already exists
		if (d.getElementById(id)) {
			fjs.parentNode.removeChild(d.getElementById(id));
		}

		// Create script element
		js = d.createElement(s);

		fjs = getFjs();

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
			className='twitter-timeline'
			data-width={props.width}
			data-dnt='true'
			data-theme='dark'
			data-tweet-limit='1'
			href={`https://twitter.com/${props.handle}`}
		>
			Tweets by {props.handle}
		</a>
	);
};

export default LastTweet;
