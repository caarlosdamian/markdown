import React from 'react';
import './MarkdownHeader.scss';

export const MarkdownHeader = ({ label }: { label: string }) => {
  return (
    <div className="markdown__header">
      <span className="markdown__header--title">{label}</span>
      <img className="markdown__header--img" />
    </div>
  );
};
