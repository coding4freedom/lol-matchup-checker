
import LolBorder from './components/LolBorder';
import './App.css';
import { SearchProvider } from './provider/SearchContext';

function App() {
  

  return (
    <>
    <SearchProvider>
      <LolBorder />
    </SearchProvider>
    </>
  )
}

export default App;
