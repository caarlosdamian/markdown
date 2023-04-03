import React from 'react';
import { useSelector } from 'react-redux';
import { iconHidePreview, iconShowPreview } from '../../assets';
import { RootState } from '../../redux/store';
import './MarkdownHeader.scss';

export const MarkdownHeader = ({ label }: { label: string }) => {
  const { hide } = useSelector((state: RootState) => state.screen);
  return (
    <div className="markdown__header">
      <span className="markdown__header--title">{label}</span>
        <img
          className="markdown__header--img"
          src={hide ? iconHidePreview : iconShowPreview}
        />
    </div>
  );
};
