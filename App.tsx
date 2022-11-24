import * as React from 'react';
import Button from './components/Button';
import Flex from './components/Flex';
import Page from './components/Page';
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
  const [page, setPage] = React.useState(<Home />);

  return (
    <Page>
      <Flex gap="10px">
        <Button onClick={() => setPage(<Home />)}>Home</Button>
        <Button onClick={() => setPage(<About />)}>About</Button>
      </Flex>
      {page}
    </Page>
  );
}
