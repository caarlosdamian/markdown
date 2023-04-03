import React from 'react';
import { Markdown, MarkdownHeader, Preview } from '../../components';
import './Main.scss';

export const Main = () => {
  return (
    <div className="main" data-color-mode="light">
      <div className="main__content">
        <div className="main__markdown">
          <MarkdownHeader label="MARKDOWN" />
          <Markdown />
        </div>
        <div className="main__preview">
          <MarkdownHeader label="PREVIEW" />
          <Preview />
        </div>
      </div>
    </div>
  );
};
