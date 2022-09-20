import Page from '../../../components/page-elements/Page';
import HorizontalCard from '../../../components/page-elements/cards/HorizontalCard';
import PageTitle from '../../../components/page-elements/text/PageTitle';
import PageText from '../../../components/page-elements/text/PageText';
import PageHeader from '../../../components/page-elements/layout/PageHeader';
import PageBlock from '../../../components/containers/PageBlock';
import CenteredContentContainer from '../../../components/containers/CenteredContentContainer';

function WasternPage() {
	return (
		<Page showHeader='true' showFooter='true'>
			<PageHeader
				imageUrl='https://via.placeholder.com/2000x400'
				title='Wastern'
				subtitle='BLablabla'
			/>
			<PageBlock>
				<CenteredContentContainer direction='column'>
					<HorizontalCard
						imageSrc='https://via.placeholder.com/250x250'
						direction='align-left'
					>
						<PageTitle size='small'>Faites fructifier votre auberge</PageTitle>
						<PageText>
							Rendez service au plus grand nombre d'esprits possible,
							agrandissez votre auberge, débloquez de nouveaux services sur
							votre terrain, il y a de quoi faire pour attirer le plus de
							client·es et de nouveaux·velles habitant·es à Wastern !
						</PageText>
					</HorizontalCard>
					<HorizontalCard
						imageSrc='https://via.placeholder.com/250x250'
						direction='align-right'
					>
						<PageTitle size='small'>
							Occupez vos journées selon vos désirs
						</PageTitle>
						<PageText>
							À Wastern, c'est vous qui déterminez vos activités quotidiennes !
							Vous voulez planter des légumes de saison, allez à la pêche,
							rejoindre votre crush pour un rendez-vous ou bien faire un tour au
							club abandonné pour trouver des cristaux ? C'est vous qui
							choisissez !
						</PageText>
					</HorizontalCard>
					<HorizontalCard
						imageSrc='https://via.placeholder.com/250x250'
						direction='align-left'
					>
						<PageTitle size='small'>
							Explorez la ville et débloquez de nouveaux endroits
						</PageTitle>
						<PageText>
							Il existe 5 biomes à Wastern dans lesquels vous trouverez toutes
							sortes de plantes, animaux, objets et ambiances différentes. Si
							vous regardez attentivement, vous pourriez même trouver des
							passages secrets à débloquer au fil du temps…
						</PageText>
					</HorizontalCard>
					<HorizontalCard
						imageSrc='https://via.placeholder.com/250x250'
						direction='align-right'
					>
						<PageTitle size='small'>
							Participez aux événements saisonniers
						</PageTitle>
						<PageText>
							Chaque saison et chaque année réserve son lot de surprises à
							Wastern. Qu'il s'agisse d'une fête locale, de nouveaux objets
							disponibles ou d'un personnage mystérieux qui vient s'installer,
							vous ne risquez pas de vous ennuyer !
						</PageText>
					</HorizontalCard>
					<HorizontalCard
						imageSrc='https://via.placeholder.com/250x250'
						direction='align-left'
					>
						<PageTitle size='small'>
							Créez des liens avec les résidents
						</PageTitle>
						<PageText>
							Développez des relations romantiques ou amicales avec les [X]
							résident·es de Wastern, mais encore faut-il qu'iels viennent
							s'installer ici, il faudra redorer la réputation de la ville pour
							ça !
						</PageText>
					</HorizontalCard>
				</CenteredContentContainer>
			</PageBlock>
		</Page>
	);
}

export default WasternPage;
