import logo from './logo.svg';
import './common.css';


import firebase from './firebase';

import { BrowserRouter } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import { Alert } from './components/Alert';
function App() {
  return (
    <BrowserRouter>
      <Alert />
      <div className="App">

        <LandingPage></LandingPage>
      </div>
    </BrowserRouter>
  );
}

export default App;
