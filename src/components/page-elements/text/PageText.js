// Import styles
import pageTextStyle from './PageText.module.css';

function PageText(props) {
	return <p className={pageTextStyle['page-text']}>{props.children}</p>;
}

export default PageText;
