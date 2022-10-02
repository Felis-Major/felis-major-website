/* =======================
 * Imports
 * ======================= */

import style from './ServiceCard.module.scss';
import star from '../../../imgs/elements/star.png';

/* =======================
 * Main
 * ======================= */

const ServiceCard = (props) => {
	const serviceCardClass = style['service-card'];
	const imageClass = style['image'];
	const mainContainerClass = style['main-container'];
	const titleClass = style['title'];
	const descriptionClass = style['description'];
	const servicesContainerClass = style['services-container'];
	const listContainerClass = style['list-container'];

	return (
		<div className={serviceCardClass}>
			<img className={imageClass} src={props.imageUrl} />
			<div className={`card ${mainContainerClass}`}>
				<p className={titleClass}>{props.title}</p>
				<p className={descriptionClass}>{props.description}</p>
				<div className={servicesContainerClass}>
					<ul className={listContainerClass}>
						{props.services.map((x, index) => (
							<Service key={index}>
								<img src={star} />
								<p>{x}</p>
							</Service>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard;

const Service = (props) => {
	const listElementClass = style['list-element'];

	return <li className={listElementClass}>{props.children}</li>;
};
