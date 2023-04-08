import React from 'react';
import { useSelector } from 'react-redux';
import { iconDocument, iconLightMode, iconMenu, iconSave } from '../../assets';
import { File } from '../../common/types';
import { RootState } from '../../redux/store';
import { Button } from '../button/Button';
import './Sidebar.scss';

export const Sidebar = () => {
  const {
    sidebar: { show },
    files: { files },
  } = useSelector((state: RootState) => state);
  console.log(files);
  return (
    <div className={`sidebar ${show && 'show'}`}>
      <div className="information">
        <div className="information__header">MARKDOWN</div>
        <div className="information__controls">
          <Button label="+ New Document" />
          {files.map((file: File) => (
            <div className="information__file">
              <img src={iconDocument} alt="iconDocument" />
              <div className="information__file--details">
                <span className="file__date">{file.createdAt}</span>
                <span className="file__name">{file.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="theme"></div>
    </div>
  );
};
