import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './Preview.scss';

export const Preview = () => {
  const {
    selectedFile: { content },
  } = useSelector((state: RootState) => state.files);
  return (
    <div className="preview">
      <MDEditor.Markdown source={content} />
    </div>
  );
};
