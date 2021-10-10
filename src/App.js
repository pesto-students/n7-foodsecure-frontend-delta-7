
import './common.css';

import firebase from './firebase';
import { BrowserRouter } from 'react-router-dom';
import LandingPage from './containers/LandingPage';
import { Alert } from './components/Alert';

import { LoadingIndicator } from './components/LoadingIndicator';


function App() {
  return (
    <BrowserRouter>
    <LoadingIndicator />
      <Alert />
      <div className="App">

        <LandingPage></LandingPage>
      </div>
    </BrowserRouter>
  );
}

export default App;
