import logo from './logo.svg';
import './App.css';

function SigninCallback()
{
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Signin callback
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

export default SigninCallback;