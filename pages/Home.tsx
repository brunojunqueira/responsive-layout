import * as React from 'react';

import Page from '../components/Page';
import Text from '../components/Text';

export default function Home() {
  return (
    <Page path="/" title="Home" flex>
      <Text>This is Home</Text>
    </Page>
  );
}
