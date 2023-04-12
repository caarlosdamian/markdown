import MDEditor from '@uiw/react-md-editor';
import { useDispatch, useSelector } from 'react-redux';
import { changeContent } from '../../redux/slices/filesSlice';
import { RootState } from '../../redux/store';
import './Markdown.scss';

export const Markdown = () => {
  const {
    selectedFile: { content },
  } = useSelector((state: RootState) => state.files);
  const dispatch = useDispatch();
  return (
    <div className="markdown">
      <MDEditor
        preview="edit"
        value={content}
        overflow={true}
        height="100vh"
        hideToolbar={true}
        onChange={(e) => dispatch(changeContent({ value: e, name: 'content' }))}
      />
    </div>
  );
};
