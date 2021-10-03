import logo from './logo.svg';
import './App.css';


import firebase from './firebase';

import { BrowserRouter } from 'react-router-dom';
import LandingPage from './containers/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <LandingPage></LandingPage>
    </div>
    </BrowserRouter>
  );
}

export default App;
