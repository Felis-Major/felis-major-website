/* =======================
 * Imports
 * ======================= */

import style from './PageHeader.module.scss';

/* =======================
 * Main
 * ======================= */

const PageHeader = (props) => {
	const pageHeaderClass = style['page-header'];

	let classes = pageHeaderClass;
	if (props.className !== undefined) {
		classes += ` ${props.className}`;
	}

	const imageClass = style['image'];
	const titleClass = style['title'];
	const subtitleClass = style['subtitle'];

	return (
		<section className={classes}>
			<img className={imageClass} src={props.imageUrl} />
			<h1 className={titleClass}>{props.title}</h1>
			<h3 className={subtitleClass}>{props.subtitle}</h3>
		</section>
	);
};

export default PageHeader;
