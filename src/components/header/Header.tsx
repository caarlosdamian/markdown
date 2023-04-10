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
import { changeContent, saveFile } from '../../redux/slices/filesSlice';

export const Header = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    sidebar: { show },
    files: { selectedFile },
  } = useSelector((state: RootState) => state);
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
          <div className="header__info--wrapper">
            <span className="file__title">Document Name</span>
            <input
              type="text"
              value={selectedFile.name}
              className="file__name--input"
              onChange={(e) => dispatch(changeContent({ value: e.target.value, name: 'name' }))}
            />
          </div>
        </div>
        <div className="header__info--controls">
          <img src={iconDelete} alt="iconDelete" />
          <div className="icon__wrapper">
            <Button
              label={
                <img
                  src={iconSave}
                  alt="iconSave"
                  onClick={() => dispatch(saveFile())}
                />
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};
