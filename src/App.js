import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Esto es una prueba
        </p>
        <a
          className="App-link"
          href="https://github.com/juaniforclaz/curso-react-forclaz.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          Desafio entregable n°1
        </a>
      </header>
    </div>
  );
}

export default App;
