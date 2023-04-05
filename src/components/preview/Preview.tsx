import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import { useSelector } from 'react-redux';
import './Preview.scss';

export const Preview = () => {
  const state = useSelector((state) => state.files.files);
  const file = state[0].content;
  return (
    <div className='preview'>
      <MDEditor.Markdown source={file} />
    </div>
  );
};
