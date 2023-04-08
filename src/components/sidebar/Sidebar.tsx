import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iconDarkMode, iconDocument, iconLightMode } from '../../assets';
import { File } from '../../common/types';
import { changeSelectedFile } from '../../redux/slices/filesSlice';
import { AppDispatch, RootState } from '../../redux/store';
import { Button } from '../button/Button';
import './Sidebar.scss';

export const Sidebar = () => {
  const {
    sidebar: { show },
    files: { files },
  } = useSelector((state: RootState) => state);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={`sidebar ${show && 'show'}`}>
      <div className="information">
        <div className="information__header">MARKDOWN</div>
        <div className="information__controls">
          <span className="information__controls--title">MY DOCUMENTS</span>
          <Button label="+ New Document" />
          {files.map((file: File) => (
            <div
              className="information__file"
              onClick={() => dispatch(changeSelectedFile(file))}
              key={file.content}
            >
              <img src={iconDocument} alt="iconDocument" />
              <div className="information__file--details">
                <span className="file__date">{file.createdAt}</span>
                <span className="file__name">{file.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="theme">
        <img src={iconLightMode} alt="iconLightMode" />
        <div className="toggle__container">
          <div className="toggle__container--circle"></div>
        </div>
        <img src={iconDarkMode} alt="iconDarkMode" />
      </div>
    </div>
  );
};
