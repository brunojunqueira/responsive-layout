import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import RLProvider from './contexts/LayoutContext';

import About from './pages/About';
import Home from './pages/Home';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RLProvider>
      <Home />
      <About />
    </RLProvider>
  </StrictMode>
);
