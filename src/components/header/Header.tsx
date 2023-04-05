import React from 'react';
import { iconDelete, iconDocument, iconMenu, iconSave } from '../../assets';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__menu">
        <img src={iconMenu} alt="iconMenu" />
      </div>
      <div className="header__info">
        <div className="header__info--file">
          <img src={iconDocument} alt="iconDocument" />
          <span>welcome.md</span>
        </div>
        <div className="header__info--controls">
          <img src={iconDelete} alt="iconDelete" />
          <div className="icon__wrapper">
            <img src={iconSave} alt="iconSave" />
          </div>
        </div>
      </div>
    </header>
  );
};
