import ImageBlock from '../../containers/BackgroundContentContainer';
import PageSeparator from './PageSeparator';

function PageHeader(props) {
	return (
		<>
			<ImageBlock height='large' url={props.imageUrl} />
			<PageSeparator title={props.title} subtitle={props.subtitle}>
				{props.children}
			</PageSeparator>
		</>
	);
}

export default PageHeader;
