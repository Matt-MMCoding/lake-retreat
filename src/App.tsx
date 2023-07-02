import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header/Header';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main style={{ minHeight: '200vh' }}>
      <Header />
    </main>
  );
}

export default App;
