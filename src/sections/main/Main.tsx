import { useSelector } from 'react-redux';
import { Markdown, MarkdownHeader, Preview } from '../../components';
import { useWindowInfo } from '../../hooks/useWindowInfo';
import { RootState } from '../../redux/store';
import './Main.scss';

export const Main = () => {
  const { viewPort } = useWindowInfo();
  const {
    screen: { hide },
    theme: { dark },
  } = useSelector((state: RootState) => state);

  return (
    <div
      className={`main ${dark ? 'dark' : ''} `}
      data-color-mode={`${dark ? 'dark' : 'light'}`}
    >
      {viewPort === 'desktop' ? (
        <div className="main__content_markdown">
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
        <div className="main__content_markdown">
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
