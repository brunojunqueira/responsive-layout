import * as React from 'react';

function goTo(path: string, newTab?: boolean) {
  window.open(path, newTab ? '_blank' : '_self');
}

export default function useNavigation() {
  const query = window.location.search
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

  return { query, goTo };
}
