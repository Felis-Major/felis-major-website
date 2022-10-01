// Import components
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import PageHeader from '../components/layout/PageHeader';
import HorizontalCard from '../components/content/cards/HorizontalCard';

const WasternPage = () => {
	return (
		<>
			<Header />

			<div className='content'>
				<PageHeader
					title='Wastern'
					subtitle='Bla bla game'
					imageUrl='https://wallpaperheart.com/wp-content/uploads/2018/08/hd-wallpaper-1366x768-11.jpg'
				/>
				<Pitch />
				<KSPs />
				<FAQ />
			</div>

			<Footer />
		</>
	);
};

export default WasternPage;

const Pitch = () => {
	return (
		<section>
			<h1>Pitch</h1>
			<div className='container flex-centered flex-column'>
				<div className='card-wide dark-background'>
					<p>
						<b>Welcome to wastern</b>
					</p>
					<p>Le pitch</p>
				</div>
			</div>
		</section>
	);
};

const KSPs = () => {
	const ksps = [
		{
			title: 'test',
			content:
				'test testtest testtest testtest testtest testtest testtest testtest testtest test',
			imageUrl: 'https://via.placeholder.com/1000x1000',
		},
		{
			title: 'test',
			content:
				'test testtest testtest testtest testtest testtest testtest testtest testtest test',
			imageUrl: 'https://via.placeholder.com/1000x1000',
		},
		{
			title: 'test',
			content: 'test test',
			imageUrl: 'https://via.placeholder.com/1000x1000',
		},
	];

	return (
		<section>
			<h1>KSPs</h1>
			<div className='container flex-centered'>
				{ksps.map((x, index) => (
					<HorizontalCard
						imageUrl={x.imageUrl}
						align={index % 2 == 0 ? 'align-left' : 'align-right'}
						key={index}
					>
						<h2>{x.title}</h2>
						<p>{x.content}</p>
					</HorizontalCard>
				))}
			</div>
		</section>
	);
};

const FAQ = () => {
	const questions = [
		{ title: 'test', content: 'testtest' },
		{ title: 'test', content: 'testtest' },
		{ title: 'test', content: 'testtest' },
		{ title: 'test', content: 'testtest' },
		{ title: 'test', content: 'testtest' },
	];

	return (
		<section>
			<h1>FAQ</h1>
			<div className='container flex-centered flex-column'>
				{questions.map((x, index) => (
					<div className='card-wide light-background' key={index}>
						<p>
							<b>{x.title}</b>
						</p>
						<p>{x.content}</p>
					</div>
				))}
			</div>
		</section>
	);
};
