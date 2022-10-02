// Import localization package
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import Translations
import translationEN from './en-US';
import translationFR from './fr-FR';

// Initialize i18n
i18n.use(initReactI18next);
i18n.init({
	resources: {
		en: { translation: translationEN },
		fr: { translation: translationFR },
	},
	lng: 'fr',
	fallbackLng: 'fr',
	interpolation: { escapeValue: false },
});

export default i18n;
