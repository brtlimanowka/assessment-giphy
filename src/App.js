import { useEffect, useState } from 'react';
import Theme from './utils/Theme';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import { queryBuilder } from './services/QueryBuilder';
import { httpClient } from './services/HttpClient';
import './App.css';

function App() {
  const queryReceivedHandler = async (query) => {
    if (query) {
      const builtQuery = queryBuilder(query);
      let data = httpClient(builtQuery);
      console.log(data);
    }
  };
  return (
    <Theme>
      <div className='App'>
        <Navbar onQuery={queryReceivedHandler} />
        <Container />
      </div>
    </Theme>
  );
}

export default App;
