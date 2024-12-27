import { FC } from 'react';
import { Trans } from 'react-i18next';



interface AppProps {
  title: string;
}



const App: FC<AppProps> = ({ title }) => {

  return <h1 id='main-title' ><Trans i18nKey="welcomeMessage">
 {title} </Trans></h1>


  
};

export default App;