import { BorderItem, BorderLayout, Card, GridLayout } from "@salt-ds/core";
import "@salt-ds/theme/index.css";
import "@salt-ds/theme/css/theme-next.css";
import styles from "./index.module.css";
import { AppHeader } from "./customconponents/AppHeader.tsx";


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SignUpForm } from "./customconponents/SaltForms.tsx";
import './index.css'
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/300-italic.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/400-italic.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/500-italic.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/600-italic.css";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/700-italic.css";
import "@fontsource/open-sans/800.css";
import "@fontsource/open-sans/800-italic.css";
import "@fontsource/pt-mono";

import App from './App.tsx'

import "./utils/i18n/i18next.ts"
import { Trans } from "react-i18next";

// Import <SaltProvider>
import { SaltProviderNext } from "@salt-ds/core";

// Import theme CSS
import "@salt-ds/theme/index.css";

import { JobDisplay } from "./customconponents/JobDisplay.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SaltProviderNext
     accent="teal"             // or "blue"
     corner="rounded"          // or "sharp"
     headingFont="Amplitude"   // or "Open Sans"
     actionFont="Amplitude"    // or "Open Sans"
    >
    
    
    <BorderLayout>
    <BorderItem position="north" id="north" className={styles.borderItem}>
      <AppHeader />
      
      <div>
      <App title='React and TypeScript Demo using the Salt Design System' />
      </div>
      

    </BorderItem>
    <BorderItem position="west" id="west" className={styles.borderItem}>
      <SignUpForm />
    </BorderItem>
    <BorderItem position="center" id="center" className={styles.borderItem}>
    
    <h2>
    <Trans i18nKey="welcomeMessage">
      Welcome to React and TypeScript Demo using the Salt Design System
    </Trans>
    </h2>
      
      <JobDisplay />
      

     
    </BorderItem>
    <BorderItem position="east" id="east" className={styles.borderItem}>
    </BorderItem>
    <BorderItem position="south" id="south" className={styles.borderItem}>
      <Card id="self-card">
    <img id="com-manager-img" src="src/assets/SKcommunityManager.png" alt="" />
    </Card>
    </BorderItem>
  </BorderLayout>

    </SaltProviderNext>
  </StrictMode>,
)
