import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.instagram.com/hahn.camila/'><FaInstagram size={30}/></a></li>
                <li><a href='https://github.com/hahncamila'><FaGithub size={30}/></a></li>
                <li><a href='https://www.linkedin.com/in/camilahahn/'><FaLinkedin size={30}/></a></li>
           </ul>
           <p>camilamhahn@gmail.com</p>
           <p>Camila Moreira Hahn @ 2024</p>
        </div>
    )
}

export default Footer