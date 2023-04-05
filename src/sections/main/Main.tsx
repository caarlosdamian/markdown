import { useSelector } from 'react-redux';
import { Markdown, MarkdownHeader, Preview } from '../../components';
import { useWindowInfo } from '../../hooks/useWindowInfo';
import { RootState } from '../../redux/store';
import './Main.scss';

export const Main = () => {
  const { viewPort } = useWindowInfo();
  const { hide } = useSelector((state: RootState) => state.screen);

  return (
    <div className="main" data-color-mode="light">
      {viewPort === 'desktop' ? (
        <div className="main__content">
          {hide && (
            <div className="main__markdown">
              <MarkdownHeader label="MARKDOWN" />
              <Markdown />
            </div>
          )}
          <div className={`main__preview`}>
            <MarkdownHeader label="PREVIEW" />
            <Preview />
          </div>
        </div>
      ) : (
        <div className="main__content">
          {hide ? (
            <div className="main__markdown">
              <MarkdownHeader label="MARKDOWN" />
              <Markdown />
            </div>
          ) : (
            <div className={`main__preview`}>
              <MarkdownHeader label="PREVIEW" />
              <Preview />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
