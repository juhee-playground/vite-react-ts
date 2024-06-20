import { BrowserRouter } from 'react-router-dom';

import Router from '@/router';

import reactLogo from './assets/react.svg';

import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Vite + React Template</h1>
          <div className='links'>
            <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
              <img src={viteLogo} className='logo' alt='Vite logo' />
            </a>
            <a href='https://react.dev' target='_blank' rel='noreferrer'>
              <img src={reactLogo} className='logo react' alt='React logo' />
            </a>
            <a href='/home' rel='noreferrer'>
              Home
            </a>
            <a href='/basic' rel='noreferrer'>
              basic page
            </a>
          </div>
        </header>

        <main className='container-mobile'>
          <Router />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
