import { Children } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <>
      <Header />
      <Main>
        {Children}
      </Main>
      <Footer />
    </>
  );
}

export default App;
