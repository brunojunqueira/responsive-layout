import * as React from 'react';
import Button from '../components/Button';

import Page from '../components/Page';
import Text from '../components/Text';

export default function Home() {
  return (
    <Page path="/" title="Home" flex>
      <Text>This is Home</Text>
      <Button onClick={() => (window.location.pathname = '/about')}>
        About
      </Button>
    </Page>
  );
}
