// Import styles
import { useState } from 'react';
import { useDeviceTypeChanged } from '../../../utilities/useOnWindowResize';
import pageSeparatorStyle from './PageSeparator.module.css';

export default function PageSeparator(props) {
	const [device, setDevice] = useState('desktop');
	useDeviceTypeChanged(setDevice);

	const pageSeparatorClass = pageSeparatorStyle['page-separator'];
	const pageSeparatorClasses = `${pageSeparatorClass} ${props.className}`;

	const titleClass = pageSeparatorStyle['page-separator-title'];
	const titleDeviceClass = pageSeparatorStyle[`page-separator-title__${device}`];
	const titleClasses = `${titleClass} ${titleDeviceClass}`;

	const subtitleClass = pageSeparatorStyle['page-separator-subtitle'];
	const subtitleDeviceClass = pageSeparatorStyle[`page-separator-subtitle__${device}`];
	const subtitleClasses = `${subtitleClass} ${subtitleDeviceClass}`;

	return (
		<div className={pageSeparatorClasses}>
			<h1 className={titleClasses}>{props.title}</h1>
			<p className={subtitleClasses}>{props.subtitle}</p>
			{props.children}
		</div>
	);
}
