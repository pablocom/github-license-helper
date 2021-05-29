import logo from './logo.svg';
import './App.css';

function App() {
  const clientId = "e2475c9bf2dc410d31a6";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://github.com/login/oauth/authorize?client_id=e2475c9bf2dc410d31a6"
        >
          Log in with Github
        </a>
      </header>
    </div>
  );
}

export default App;
