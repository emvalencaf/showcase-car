//react
    //react-icons
import {FaGithub, FaLinkedin, FaCode} from 'react-icons/fa'
import Navbar from '../header/Navbar.component';

//styles
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <span>&copy; 2022, criado por Edson Mota Valença Filho</span>
        <ul className={styles.links_list}>
            <a href="https://www.github.com/emvalencaf" target='blank'>
                <abbr title="meu GitHub">
                    <li><FaGithub /></li>
                </abbr>
            </a>
            <a href="https://www.linkedin.com/in/emvalencaf">
                <abbr title="meu LinkedIn">
                    <li><FaLinkedin /></li>
                </abbr>
            </a>
            <a href="https://emvalenca-portfolio.herokuapp.com/" target='blank'>
                <abbr title="Meu portfólio">
                    <li><FaCode /></li>
                </abbr>
            </a>
        </ul>
    </footer>
  );
};

export default Footer;