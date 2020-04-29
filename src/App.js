import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Sidebar />
      <div id="main">
        <Header />
        <Board />
      </div>
      <GlobalStyle />
    </DndProvider>
  );
}

export default App;
