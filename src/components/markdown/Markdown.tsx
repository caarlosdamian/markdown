import MDEditor from '@uiw/react-md-editor';
import React from 'react';
import { useSelector } from 'react-redux';
import './Markdown.scss';

export const Markdown = () => {
  const state = useSelector((state) => state.files.files);
  const file = state[0].content;
  console.log(file);
  return (
    <div>
      <MDEditor preview="edit" value={file} height='100vh'/>
    </div>
  );
};
