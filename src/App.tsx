import Header from './components/Header/Header';
import { Search } from './components/Search';

function App() {
  return (
    <main style={{ minHeight: '200vh' }}>
      <Header />
      <Search placeholder="Find your escape..." />
    </main>
  );
}

export default App;
