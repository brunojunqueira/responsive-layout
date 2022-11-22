import * as React from 'react';

import '../../style/style.scss';

interface LayoutContextProps {}

const LayoutContext = React.createContext({} as LayoutContextProps);

interface LayoutProviderProps {
  children: React.ReactNode;
}

export default function LayoutProvider({ children }: LayoutProviderProps) {
  return <LayoutContext.Provider value={{}}>{children}</LayoutContext.Provider>;
}
