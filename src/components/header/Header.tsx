import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  iconClose,
  iconDelete,
  iconDocument,
  iconMenu,
  iconSave,
} from '../../assets';
import { toggleSidebar } from '../../redux/slices/sidebarSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { Button } from '../button/Button';
import './Header.scss';
import { saveFile } from '../../redux/slices/filesSlice';

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { show } = useSelector((state: RootState) => state.sidebar);
  return (
    <header className="header">
      <div className="header__menu">
        <img
          src={show ? iconClose : iconMenu}
          alt="iconMenu"
          onClick={() => dispatch(toggleSidebar())}
        />
      </div>
      <div className="header__info">
        <div className="header__info--file">
          <img src={iconDocument} alt="iconDocument" />
          <span>welcome.md</span>
        </div>
        <div className="header__info--controls">
          <img src={iconDelete} alt="iconDelete" />
          <div className="icon__wrapper">
            <Button label={<img src={iconSave} alt="iconSave" onClick={()=>dispatch(saveFile())} />} />
          </div>
        </div>
      </div>
    </header>
  );
};
