import Card from './Card';
import style from './ServiceCard.module.css';

function ServiceCard(props) {
	const serviceCardStyle = {
		backgroundImage: `url(${props.imageUrl})`,
	};

	return (
		<div className={style['service-card']}>
			<div className={style['service-card__image']} style={serviceCardStyle} />
			<Card size='large'>
				<h2 className={style['service-card__title']}>{props.title}</h2>
				<p className={style['service-card__description']}>
					{props.description}
				</p>
				<ul className={style['service-card__list-container']}>
					{props.services.map((x) => (
						<li className={style['service-card__list-container-item']}>
							{`${props.separator} ${x}`}
						</li>
					))}
				</ul>
			</Card>
		</div>
	);
}

export default ServiceCard;
