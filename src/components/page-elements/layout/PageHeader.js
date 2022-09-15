import PageBlock from '../../containers/PageBlock';
import PageSeparator from './PageSeparator';

function PageHeader(props) {
	return (
		<>
			<PageBlock height="400" backgroundUrl={props.imageUrl} />
			<PageSeparator title={props.title} subtitle={props.subtitle}>
				{props.children}
			</PageSeparator>
		</>
	);
}

export default PageHeader;
