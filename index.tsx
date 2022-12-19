import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RLProvider from './contexts/LayoutContext';

import About from './pages/About';
import Home from './pages/Home';

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <RLProvider>
      <div>Header</div>
      <Home />
      <About />
    </RLProvider>
  </StrictMode>
);
