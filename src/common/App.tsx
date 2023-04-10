import React, { useState } from 'react';
import { Header, Markdown, Preview, Sidebar } from '../components';
import { Main } from '../sections/main/Main';
import './App.scss';
import { Modal } from '../components/modal/Modal';

export const App = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <main>
      {show && <Modal  setShow={setShow}/>}
      <Sidebar />
      <div className="main__content">
        <Header setShow={setShow} />
        <Main />
      </div>
    </main>
  );
};
