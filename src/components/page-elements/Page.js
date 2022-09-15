// Import style
import pageStyle from './Page.module.css';

// Import navigation elements
import Header from '../navigation/Header';
import Footer from '../navigation/Footer';

function Page(props) {
	return (
		<div className={pageStyle['page']}>
			{props.showHeader === 'true' ? <Header /> : <></>}
			{props.children}
			{props.showFooter === 'true' ? <Footer /> : <></>}
		</div>
	);
}

export default Page;
