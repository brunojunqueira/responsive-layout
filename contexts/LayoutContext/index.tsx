import * as React from 'react';

import '../../style/style.scss';

interface RLContextProps {
  query: { [key: string]: string };
}

const RLContext = React.createContext({} as RLContextProps);

interface LayoutProviderProps {
  children?: React.ReactNode;
}

export default function RLProvider({ children }: LayoutProviderProps) {
  const [_query, _setQuery] = React.useState(() => {
    return window.location.search
      ? Object.fromEntries(
          window.location.search
            .replace('?', '')
            .split('&')
            .map((item) => {
              if (item) {
                return item.split('=');
              }
            })
        )
      : {};
  });
  return (
    <RLContext.Provider value={{ query: _query }}>
      {children}
    </RLContext.Provider>
  );
}

export function useRLContext() {
  return React.useContext(RLContext);
}
