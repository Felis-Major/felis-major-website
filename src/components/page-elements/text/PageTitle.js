import style from './PageTitle.module.css';

function PageTitle(props) {
	return <h1 className={style['page-title']}>{props.children}</h1>;
}

export default PageTitle;
