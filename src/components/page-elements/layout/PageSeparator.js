// Import styles
import style from './PageSeparator.module.css';

function PageSeparator(props) {
	return (
		<div className={style['page-separator']}>
			{/* Display Page Separator title */}
			<h1 className={style['page-separator__title']}>{props.title}</h1>

			{/* Display all sub titles of this separator */}
			<p className={style['page-separator__sub-title']}>{props.subtitle}</p>

			{/* Insert all optional children */}
			{props.children}
		</div>
	);
}

export default PageSeparator;
