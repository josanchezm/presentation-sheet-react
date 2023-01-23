import instagramIcon from './assets/Instagram Icon.png'
import linkedinIcon from './assets/Linkedin Icon.png'
import githubIcon from './assets/GitHub Icon.png'

export default function Footer () {
    return (
        <footer>
            <ul>
                <li>
                    <a href="https://www.instagram.com/josanchezmd/" target="_blank">
                        <img src={instagramIcon} alt="Instagram-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jaime-orlando-s%C3%A1nchez-mendieta-4bba6b1a1/" target="_blank">
                        <img src={linkedinIcon} alt="LinkedIn-icon" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/josanchezm" target="_blank">
                        <img src={githubIcon} alt="Github-icon" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}