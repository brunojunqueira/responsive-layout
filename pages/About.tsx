import * as React from 'react';
import Button from '../components/Button';

import Page from '../components/Page';
import Text from '../components/Text';
import useNavigation from '../hooks/useNavigation';

export default function About() {
  const { goTo } = useNavigation();
  return (
    <Page path="/about" title="About" flex>
      <Text>This is About</Text>
      <Button onClick={() => goTo('/')}>Go to Home</Button>
    </Page>
  );
}
