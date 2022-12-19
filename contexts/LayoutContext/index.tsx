import * as React from 'react';

import '../../style/style.scss';

interface RLContextProps {}

const RLContext = React.createContext({} as RLContextProps);

interface LayoutProviderProps {
  children?: React.ReactNode;
}

export default function RLProvider({ children }: LayoutProviderProps) {
  return <RLContext.Provider value={{}}>{children}</RLContext.Provider>;
}

export function useRLContext() {
  return React.useContext(RLContext);
}
