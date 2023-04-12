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
import { changeContent, saveFile } from '../../redux/slices/filesSlice';
import { useWindowInfo } from '../../hooks/useWindowInfo';
import './Header.scss';

export const Header = ({
  setShow,
}: {
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { viewPort } = useWindowInfo();
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
              onChange={(e) =>
                dispatch(changeContent({ value: e.target.value, name: 'name' }))
              }
            />
          </div>
        </div>
        <div className="header__info--controls">
          <svg
            width="18"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setShow(true)}
          >
            <path
              d="M7 16a1 1 0 0 0 1-1V9a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM17 4h-4V3a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v1H1a1 1 0 1 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6h1a1 1 0 0 0 0-2ZM7 3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1H7V3Zm7 14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6h10v11Zm-3-1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z"
              fill="#7C8187"
            />
          </svg>
          <div className="icon__wrapper">
            <Button
              onClick={() => dispatch(saveFile())}
              label={
                viewPort === 'desktop' ? (
                  <div className="btn-save">
                    <img src={iconSave} alt="iconSave" />
                    <span>Save Changes</span>
                  </div>
                ) : (
                  <img src={iconSave} alt="iconSave" />
                )
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
};
