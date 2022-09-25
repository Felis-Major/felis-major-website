const LastTweet = (props) => {
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
