import * as React from 'react';

import Page from '../components/Page';
import Text from '../components/Text';

export default function About() {
  return (
    <Page path="/about" title="About" flex>
      <Text>This is About</Text>
    </Page>
  );
}