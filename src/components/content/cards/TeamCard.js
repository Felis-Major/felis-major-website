/* =======================
 * Imports
 * ======================= */

import style from './TeamCard.module.scss';

/* =======================
 * Main
 * ======================= */

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
			<img className={portraitClass} src={props.portraitUrl} />
			<div className={nameClass}>{props.name}</div>
			<div className={jobTitleClass}>{props.jobTitle}</div>
			<TwitterLink handle={props.handle} />
		</div>
	);
};

export default TeamCard;

/* =======================
 * Private
 * ======================= */

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
