import React from 'react';
import ReactDOM from 'react-dom/client';
import { DndProvider } from 'react-dnd';
import { HTML5Backend as Backend } from 'react-dnd-html5-backend';
import './index.css';
import App from './App';
import { AppStateProvider } from './AppStateContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <DndProvider backend={Backend}>
  <AppStateProvider>
    <App/>
  </AppStateProvider>
  </DndProvider>
);

