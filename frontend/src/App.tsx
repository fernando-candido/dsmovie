import {ReactComponent as GitHubIcon} from './assets/img/github.svg';

function App() {
  return (
    <header>
      <nav>
        <div>
          <h1>DS Movie</h1>
          <a href="https://github.com/fernando-candido">
          <div>
            <GitHubIcon />
            <p>/fernando-candido</p>
          </div>
          </a>
        </div>

      </nav>

    </header>
  );
}

export default App;

