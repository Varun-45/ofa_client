import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
