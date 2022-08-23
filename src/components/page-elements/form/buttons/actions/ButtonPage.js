// Import components
import Button from '../Button';
import { Link } from 'react-router-dom';

function ButtonPage(props) {
	return (
		<Link style={{ textDecoration: 'none' }} to={props.to}>
			<Button className={props.className}>{props.children}</Button>
		</Link>
	);
}

export default ButtonPage;
