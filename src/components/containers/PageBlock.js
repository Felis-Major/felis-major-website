import style from './PageBlock.module.css';

function PageBlock(props) {
	const getHeight = () => {
		if (typeof props.height === 'undefined') {
			return 'fit-content';
		} else {
			return `${props.height}px`;
		}
	};

	let dynamicStyle = {
		backgroundImage: `url(${props.backgroundUrl})`,
		height: getHeight(),
	};

	return (
		<div className={style['page-block']} style={dynamicStyle}>
			{props.children}
		</div>
	);
}

export default PageBlock;
