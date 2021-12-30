import logo from './assets/logo.svg';
import './App.css';
import Demo from './pages/Demo/demo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Demo />
      </header>
    </div>
  );
}

export default App;
