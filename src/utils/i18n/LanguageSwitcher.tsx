import * as React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    window.location.reload();
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('zh-Hans')}>Simplified Chinese</button>
      <button onClick={() => changeLanguage('latin')}>Latin</button>
    </div>
  );
};

export default LanguageSwitcher;