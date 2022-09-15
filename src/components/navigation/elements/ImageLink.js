import style from './ImageLink.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ImageLink(props) {
	// Link state
	const [isLinkHovered, setLinkHovered] = useState(false);

	// Called when the mouse enters the object
	function handleOnMouseEnter() {
		setLinkHovered(true);
	}

	// Called when the mouse leaves the object
	function handleOnMouseLeave() {
		setLinkHovered(false);
	}

	return (
		<Link
			className={style['image-link']}
			onMouseEnter={handleOnMouseEnter}
			onMouseLeave={handleOnMouseLeave}
			to={props.link}
		>
			<img
				width={props.size}
				src={isLinkHovered ? props.imgHovered : props.imgNormal}
			/>
		</Link>
	);
}

export default ImageLink;
