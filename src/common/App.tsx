import React from 'react';
import { Header, Markdown, Preview, Sidebar } from '../components';
import { Main } from '../sections/main/Main';
import './App.scss';

export const App = () => {
  return (
    <main>
      <Header />
      <Sidebar />
      <Main />
    </main>
  );
};
