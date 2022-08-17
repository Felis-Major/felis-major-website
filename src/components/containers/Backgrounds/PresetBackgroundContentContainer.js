import BackgroundContentContainer from '../BackgroundContentContainer';
import DotsBackground from './_resources/imgs/background-dots.png';

function PresetBackgroundContentContainer(props) {
	function getBackground() {
		switch (props.background) {
			case 'dots':
				return DotsBackground;
			default:
				return '';
		}
	}

	return (
		<BackgroundContentContainer url={getBackground()}>
			{props.children}
		</BackgroundContentContainer>
	);
}

export default PresetBackgroundContentContainer;
