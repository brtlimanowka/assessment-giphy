import Theme from './Theme';
import Navbar from './components/Navbar/Navbar';
import Container from './components/Container/Container';
import { API_URL, API_KEY } from './utils/properties';
import './App.css';

function App() {
  return (
    <Theme>
      <div className='App'>
        <Navbar />
        <Container />
      </div>
    </Theme>
  );
}

export default App;
