// Import components
import Button from '../Button';

function ButtonURL(props) {
	function openURL(url) {
		if (props.url == null || props.url == '') return;
		window.open(url, '_blank', 'noopener,noreferrer');
		if (openURL) openURL.opener = null;
	}

	return (
		<Button className={props.className} onClick={() => openURL(props.url)}>
			{props.children}
		</Button>
	);
}

export default ButtonURL;
