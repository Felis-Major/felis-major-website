import style from './TeamCard.module.css';

const TeamCard = (props) => {
	const cardClass = style['card'];
	const baseCardClass = 'card';

	let classes = `${baseCardClass} ${cardClass}`;
	if (props.className !== undefined) {
		classes += ` ${props.className}`;
	}

	const portraitClass = style['portrait'];
	const nameClass = style['name'];
	const jobTitleClass = style['job-title'];

	return (
		<div className={classes}>
			<img
				className={portraitClass}
				src='https://via.placeholder.com/1000x1000'
			/>
			<div className={nameClass}>{props.name}</div>
			<div className={jobTitleClass}>{props.jobTitle}</div>
			<TwitterLink handle={props.handle} />
		</div>
	);
};

export default TeamCard;

const TwitterLink = (props) => {
	const twitterLinkClass = style['twitter-link'];

	return (
		<a
			className={twitterLinkClass}
			href={`https://twitter.com/${props.handle}`}
			target='_blank'
		>{`@${props.handle}`}</a>
	);
};
