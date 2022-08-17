import style from './CenteredContentContainer.module.css';

function CenteredContentContainer(props) {
	let direction = style['centered-content-container-row'];

	if (props.direction == 'column') {
		direction = style['centered-content-container-column'];
	}
	const classes = `${style['centered-content-container']} ${direction}`;
	return <div className={classes}>{props.children}</div>;
}

export default CenteredContentContainer;
