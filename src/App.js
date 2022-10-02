import { useState } from 'react';
import Theme from './utils/Theme';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import Spinner from './components/ui/Spinner/Spinner';
import ErrorCard from './components/ui/ErrorCard/ErrorCard';
import { queryBuilder } from './services/QueryBuilder';
import { httpClient } from './services/HttpClient';
import './App.css';

const defaults = {
  ok: false,
  data: [],
  error: null,
};

function App() {
  const [response, setResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const queryReceivedHandler = (query) => {
    if (query) {
      setIsLoading(true);
      const builtQuery = queryBuilder(query);
      httpClient(builtQuery).then((response) => {
        setResponse(response);
        setIsLoading(false);
      });
    } else setResponse(defaults);
  };

  const Renderer = () => {
    if (isLoading) {
      return <Spinner />;
    } else {
      if (response.ok && response.data.length)
        return <Container gifs={response.data} />;
      if (!response.ok && response.error)
        return <ErrorCard errorMessage={response.error} />;
      if (response.ok && !response.data.length)
        return <ErrorCard errorMessage={'No results found'} />;
    }
    return null;
  };

  return (
    <Theme>
      <div className='App'>
        <Navbar onQuery={queryReceivedHandler} />
        <Renderer />
      </div>
    </Theme>
  );
}

export default App;
