import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import LayoutProvider from './LayoutContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <LayoutProvider>
      <App />
    </LayoutProvider>
  </StrictMode>
);
