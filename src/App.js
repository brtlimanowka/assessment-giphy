import { useState, useEffect, useRef } from 'react';
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
  const [currentQuery, setCurrentQuery] = useState('');
  const [items, setItems] = useState([]);
  const currentPage = useRef(0);

  const queryReceivedHandler = (query) => {
    currentPage.current = 0;
    setCurrentQuery(query);
  };

  const endOfPageReachedHandler = () => {
    currentPage.current += 5;
    loadData();
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuery]);

  const loadData = () => {
    if (currentQuery) {
      setIsLoading(true);
      const builtQuery = queryBuilder(currentQuery, currentPage.current);
      httpClient(builtQuery).then((response) => {
        setResponse(response);
        setItems((prevItems) => [...prevItems, ...response.data]);
        setIsLoading(false);
      });
    } else setResponse(defaults);
  };

  const Renderer = () => {
    if (response.ok && items.length)
      return (
        <Container gifs={items} onEndOfPageReached={endOfPageReachedHandler} />
      );
    if (!response.ok && response.error)
      return <ErrorCard errorMessage={response.error} />;
    if (response.ok && !items.length)
      return <ErrorCard errorMessage={'No results found'} />;
    return null;
  };

  return (
    <Theme>
      <div className='App'>
        <Navbar onQuery={queryReceivedHandler} />
        <Renderer />
        {isLoading && <Spinner />}
      </div>
    </Theme>
  );
}

export default App;
