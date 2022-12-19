import * as React from 'react';
import { PageProps } from '../../components/Page';

import '../../style/style.scss';

interface LayoutContextProps {
  pages: { name: string; path: string }[];
  appendPage: (name: string, path: string) => void;
}

const LayoutContext = React.createContext({} as LayoutContextProps);

interface LayoutProviderProps {
  children: React.ReactNode;
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  const [pages, setPages] = React.useState([]);
  function appendPage(name: string, path: string) {}
  return (
    <LayoutContext.Provider value={{ pages, appendPage }}>
      {children}
    </LayoutContext.Provider>
  );
}
