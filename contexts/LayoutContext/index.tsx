import * as React from 'react';
import { PageProps } from '../../components/Page';

import '../../style/style.scss';

interface RLContextProps {
  currentPath: string;
}

const RLContext = React.createContext({} as RLContextProps);

interface LayoutProviderProps {
  children?: React.ReactNode;
}

export default function RLProvider({ children }: LayoutProviderProps) {
  const [_currentPath, _setCurrentPath] = React.useState('/');
  React.useMemo(() => {
    _setCurrentPath(window.location.pathname);
  }, [window.location.pathname]);
  return (
    <RLContext.Provider value={{ currentPath: _currentPath }}>
      {children}
    </RLContext.Provider>
  );
}

export function useRLContext() {
  return React.useContext(RLContext);
}
