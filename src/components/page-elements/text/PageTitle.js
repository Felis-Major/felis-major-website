import { useState } from 'react';
import { useDeviceTypeChanged } from '../../../utilities/useOnWindowResize';
import style from './PageTitle.module.css';

function PageTitle(props) {
	let classes = style['page-title'];
	const [device, setDevice] = useState('desktop');
	useDeviceTypeChanged(setDevice);

	switch (props.size) {
		case 'large':
			classes += ' ' + style['large'];
			break;
		case 'medium':
			classes += ' ' + style['medium'];
			break;
		case 'small':
			classes += ' ' + style['small'];
			break;
	}

	if (device === 'mobile') {
		classes += ' ' + style['mobile'];
	}

	return <span className={classes}>{props.children}</span>;
}

export default PageTitle;
