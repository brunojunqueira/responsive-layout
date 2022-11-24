import * as React from 'react';

import Page from '../components/Page';
import Text from '../components/Text';
import useBreakpoint from '../hooks/useBreakpoint';

export default function About() {
  const size = useBreakpoint({
    xs: '0-360',
    sm: '361-720',
    md: '721-1080',
    lg: '1081-1440',
    xl: '1441-2160',
    '2xl': '2161-infinity',
  });
  return (
    <Page title="About" flex>
      <Text>This is About power</Text>
      <Text>useBreakpoint Value: {size}</Text>
    </Page>
  );
}
