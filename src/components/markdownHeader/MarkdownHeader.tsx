import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { iconHidePreview, iconShowPreview } from '../../assets';
import { useWindowInfo } from '../../hooks/useWindowInfo';
import { toggleScreen } from '../../redux/slices/screenSlice';
import { AppDispatch, RootState } from '../../redux/store';
import './MarkdownHeader.scss';

export const MarkdownHeader = ({ label }: { label: string }) => {
  const { hide } = useSelector((state: RootState) => state.screen);
  const dispatch = useDispatch<AppDispatch>();
  const { screenSize, viewPort } = useWindowInfo();
  return (
    <div className="markdown__header">
      <span className="markdown__header--title">{label}</span>

      {viewPort === 'desktop' && label === 'MARKDOWN' ? (
        <></>
      ) : (
        <img
          className="markdown__header--img"
          src={hide ? iconShowPreview : iconHidePreview}
          onClick={() => dispatch(toggleScreen())}
        />
      )}
    </div>
  );
};
