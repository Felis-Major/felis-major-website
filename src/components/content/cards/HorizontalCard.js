import style from './HorizontalCard.module.scss';

const HorizontalCard = (props) => {
	const horizontalCardClass = style['horizontal-card'];
	let classes = `${horizontalCardClass} card`;

	if (props.align !== undefined) {
		classes += ` ${style[props.align]}`;
	} else {
		classes += ` ${style['align-left']}`;
	}

	const contentClass = style['content'];
	const imageClass = style['image'];

	return (
		<div className={classes}>
			<img className={imageClass} src={props.imageUrl} />
			<div className={contentClass}>{props.children}</div>
		</div>
	);
};

export default HorizontalCard;
