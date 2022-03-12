import {ReactComponent as GitHubIcon} from 'assets/img/github.svg';
import './style.css';

function Navbar(){
    return(
        <header>
        <nav className="container">
          <div className="dsmovie-nav-content">
            <h1>DS Movie</h1>
            <a href="https://github.com/fernando-candido">
            <div className='dsmovie-contact-container'>
              <GitHubIcon />
              <p className='dsmovie-contact-link'>/fernando-candido</p>
            </div>
            </a>
          </div>
  
        </nav>
  
      </header>
    );
}

export default Navbar;