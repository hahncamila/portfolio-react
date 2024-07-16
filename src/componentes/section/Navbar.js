import styles from './Navbar.module.css';
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return(
        <div className={styles.navbar}>
           <ul>
                <li><Nav.Link href="#apresentacao">Apresentação</Nav.Link></li>
                <li><Nav.Link href="#habilidades">Habilidades</Nav.Link></li>
                <li><Nav.Link href="#projects">Projetos</Nav.Link></li>
           </ul>
           <ul>
                <li><a href='https://www.instagram.com/hahn.camila/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/hahncamila'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/camilahahn/'><FaLinkedin size={30}/></a></li>
           </ul>
        </div>
    )
}

export default Navbar