import style from './PageSeparator.module.css';

function PageSeparator(props) {
	const displaySubTitle = (text) => {
		return (
			<p className={style['page-separator__sub-title']} key={text}>
				{text}
			</p>
		);
	};

	return (
		<div className={style['page-separator']}>
			{/* Display Page Separator title */}
			<h1 className={style['page-separator__title']}>{props.title}</h1>

			{/* Display all sub titles of this separator */}
			{props.subTitles?.map((x) => displaySubTitle(x)) ?? null}

			{/* Insert all optional children */}
			{props.children}
		</div>
	);
}

export default PageSeparator;
