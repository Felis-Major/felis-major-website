import style from './BackgroundContentContainer.module.css';
import ContentContainer from './ContentContainer';

function BackgroundContentContainer(props) {
	const dynamicStyle = {
		backgroundImage: `url(${props.url})`,
	};

	const classes =
		style['background-content-container'] + ' ' + getHeightClass();

	function getHeightClass() {
		switch (props.height) {
			case 'small':
				return style['background-content-container__small'];

			case 'medium':
				return style['background-content-container__medium'];

			case 'large':
				return style['background-content-container__large'];
		}

		return '';
	}

	return (
		<div className={classes} style={dynamicStyle}>
			<ContentContainer>{props.children}</ContentContainer>
		</div>
	);
}

export default BackgroundContentContainer;
