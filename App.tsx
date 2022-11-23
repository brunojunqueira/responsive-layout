import * as React from 'react';
import Button from './components/Button';
import Page from './components/Page';
import Text from './components/Text';

export default function App() {
  return (
    <Page
      title="Teste de página"
      iconSrc="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
    >
      <Button>
        <Text>a</Text>
        <Text>b</Text>
      </Button>
      <Button>Beautiful</Button>
      <Text> Lorem Ipsum</Text>
    </Page>
  );
}
