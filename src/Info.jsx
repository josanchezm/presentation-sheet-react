import './Main.css'
import './Style.css'
import foto from './assets/fotoPortafolio.jpg'
import github from './assets/github-mark.png'
import linkedin from './assets/new-linkedin-logo-white-black-png.png'

export default function App() {
  return (
    <header>
      <div className='header-info-container'>
        <img src={foto} alt="foto-portafolio" />
        <h1>Jaime Sánchez</h1>
        <h3>Back-End Developer</h3>
        <a href="https://github.com/josanchezm" target="_blank">https://github.com/josanchezm</a>
      </div>
      <div className="header-buttons-container">
        <a href="https://github.com/josanchezm" className='header-github-container' target="_blank">
          <img src={github} alt="Github-logo" /> <p>Github</p>
        </a>
        <a href="https://www.linkedin.com/in/jaime-orlando-s%C3%A1nchez-mendieta-4bba6b1a1/" className='header-linkedin-container' target="_blank">
          <img src={linkedin} alt="LinkedIn-logo" /> <p>LinkedIn</p>
        </a>
      </div>  
    </header>
  )
}
