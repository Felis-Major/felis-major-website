import Card from './Card';
import style from './TeamCard.module.css';

function TeamCard(props) {
	return (
		<Card size="large">
			<img className={style['team-card-image']} src={props.src} />
			<h2 className={style['team-card-name']}>{props.name}</h2>
			<p className={style['team-card-job-title']}>{props.jobTitle}</p>
			<a
				className={style['team-card-twitter-link']}
				href={`https://twitter.com/${props.twitterProfile}`}
				target="_blank"
			>
				@{props.twitterProfile}
			</a>
		</Card>
	);
}

export default TeamCard;
