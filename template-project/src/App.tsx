import logo from './assets/logo.svg';
import './App.css';
import { Link, useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to='/'>Home</Link>
        <Link to='/demo'>Demo</Link>
        {useRoutes(routes)}
      </header>
    </div>
  );
}

export default App;
