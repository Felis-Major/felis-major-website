import { Trans, useTranslation } from 'react-i18next';

const Translate = (key) => {
	const { t } = useTranslation();

	return <Trans i18nKey={key} />;
};

export default Translate;
