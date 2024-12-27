import { NavigationItem, StackLayout } from "@salt-ds/core";
import type { ReactElement } from "react";
import { useState } from "react";
import { SaltShakerIcon } from '@salt-ds/icons';
import { t, useTranslation } from "react-i18next";
import LanguageSwitcher from "../utils/i18n/LanguageSwitcher";



const items = ["Home", "Dash Boards", "Label 3", "Label 4", "Contact"];



export const AppHeader = (): ReactElement => {
    const [active, setActive] = useState(items[0]);
    const { t, i18n } = useTranslation();
    return (
      <nav id="top-nav">
        <SaltShakerIcon id="nav-icon" size={3} />
        <p id="nav-title"> {t('navTitle') }</p>
        <StackLayout
          as="ul"
          direction="row"
          gap={1}
          style={{ listStyle: "none" }}
        >
          {items.map((item) => (
            <li id="top-link" key={item}>
              <NavigationItem
                active={active === item}
                href="#"
                onClick={() => {
                  setActive(item);
                }}
              >
                {item}
              </NavigationItem>
            </li>
          ))}
        </StackLayout>
        <LanguageSwitcher />
      </nav>
    );
  };