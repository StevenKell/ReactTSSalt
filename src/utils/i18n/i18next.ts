import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEn from './locales/en/translation.json';
import translationZh from './locales/zh-hans/translation.json';
import translationla from './locales/latin/translation.json';


import Backend from 'i18next-http-backend';
import { useTranslation } from 'react-i18next';



i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'zh-Hans',
    resources: {
    en: {
    translation: {
      navTitle: 'Steve\'s Salt Site',
      welcomeMessage: 'React and TypeScript Demo using the Salt Design System',
      firstName: 'First Name',
      lastName : 'Last Name',
      jobTitle : 'Job Title',
      companyName : 'Company Name',
      signUp : 'Sign up',

    },
  },
  'zh-Hans': {
    translation: {
      navTitle: '史蒂夫的盐 网站',
      welcomeMessage: '反应的应用 类型脚本语言 演示',
      firstName: '名',
      lastName : '姓',
      jobTitle : '职位',
      companyName : '公司',
      signUp : '注册',
    },
  },
    latin: {
      translation: {
        navTitle: 'Stevi Salis Situs',
      welcomeMessage: 'Rēāct Et Typoscript Dēmonstrātiō',
      firstName: 'Nomen primum',
      lastName : 'Cognomen',
      jobTitle : 'Officium',
      companyName : 'Nomen societatis',
      signUp : 'Ad-scribere'
      }
    }
  }
})
    
export default i18next;