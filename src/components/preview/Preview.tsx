import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './Preview.scss';

export const Preview = () => {
  const {
    files:{selectedFile: { content }},
    theme: { dark },
  } = useSelector((state: RootState) => state);
  return (
    <div className={`preview ${dark && 'dark'}`}>
      <MDEditor.Markdown source={content} />
    </div>
  );
};
