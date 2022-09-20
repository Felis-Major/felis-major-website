import { useState } from 'react';
import { useDeviceTypeChanged } from '../../../utilities/useOnWindowResize';
import horizontalCardStyle from './HorizontalCard.module.css';

function HorizontalCard(props) {
	const [device, setDevice] = useState('desktop');
	useDeviceTypeChanged(setDevice);

	let alignment = horizontalCardStyle[props.direction];
	if (device === 'mobile') {
		alignment = horizontalCardStyle['align-center'];
	}

	return (
		<div className={horizontalCardStyle['horizontal-card'] + ' ' + alignment}>
			<div className={horizontalCardStyle['horizontal-card-image']}>
				<img src={props.imageSrc} />
			</div>
			<div className={horizontalCardStyle['horizontal-card-content']}>
				{props.children}
			</div>
		</div>
	);
}

export default HorizontalCard;
