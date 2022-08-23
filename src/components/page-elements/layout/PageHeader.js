import BackgroundContentContainer from '../../containers/BackgroundContentContainer';
import PageSeparator from './PageSeparator';

function PageHeader(props) {
	return (
		<>
			<BackgroundContentContainer height='large' url={props.imageUrl} />
			<PageSeparator title={props.title} subtitle={props.subtitle}>
				{props.children}
			</PageSeparator>
		</>
	);
}

export default PageHeader;
