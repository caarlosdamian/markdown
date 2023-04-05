import MDEditor from '@uiw/react-md-editor';
import { useSelector } from 'react-redux';
import './Markdown.scss';

export const Markdown = () => {
  const state = useSelector((state) => state.files.files);
  const file = state[0].content;
  return (
    <div className="markdown">
      <MDEditor preview="edit" value={file} height="100vh" />
    </div>
  );
};
