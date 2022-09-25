import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

let getUserLang = navigator.language || navigator.userLanguage;
let userLang = getUserLang.substring(0, getUserLang.indexOf('-'));

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		lng: userLang,
		backend: {
			/* translation file path */
			loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
		},
		fallbackLng: 'en',
		debug: true,
		/* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
		ns: ['translations'],
		defaultNS: 'translations',
		keySeparator: false,
		interpolation: {
			escapeValue: false,
			formatSeparator: ','
		},
		react: {
			wait: true
		}
	})

export default i18n




// import i18n from 'i18next'
// import { connect } from 'react-redux'
// import Backend from 'i18next-xhr-backend'
// import { initReactI18next } from 'react-i18next'


// function i18nSettings({ lang }) {


// 	return (
// 		i18n
// 			.use(Backend)
// 			.use(initReactI18next)
// 			.init({
// 				lng: lang,
// 				backend: {
// 					/* translation file path */
// 					loadPath: '/assets/i18n/{{ns}}/{{lng}}.json'
// 				},
// 				fallbackLng: lang,
// 				debug: true,
// 				/* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
// 				ns: ['translations'],
// 				defaultNS: 'translations',
// 				keySeparator: false,
// 				interpolation: {
// 					escapeValue: false,
// 					formatSeparator: ','
// 				},
// 				react: {
// 					wait: true
// 				}
// 			})
// 	)
// }
// function mapStateToProps({ userSettings }) {

// 	return {
// 		lang: userSettings.lang
// 	};

// }

// const mapDispatchToprops = {

// };

// export default connect(mapStateToProps, mapDispatchToprops)(i18nSettings);