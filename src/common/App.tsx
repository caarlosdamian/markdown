import React from "react";
import { Header, Markdown, Preview, Sidebar } from "../components";

export const App = () => {
  return (
    <main>
      <Header />
      <Sidebar />
      <Markdown />
      <Preview />
    </main>
  );
};
