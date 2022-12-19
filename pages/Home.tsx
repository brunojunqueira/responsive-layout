import * as React from 'react';
import Button from '../components/Button';

import Page from '../components/Page';
import Text from '../components/Text';
import useNavigation from '../hooks/useNavigation';

export default function Home() {
  const { goTo } = useNavigation();
  return (
    <Page path="/" title="Home" flex>
      <Text>This is Home</Text>
      <Button onClick={() => goTo('/about')}>Go to About</Button>
    </Page>
  );
}
