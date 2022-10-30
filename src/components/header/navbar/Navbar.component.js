//react
    //react-router
import { NavLink } from 'react-router-dom';


//styles
import styles from './Navbar.module.css';
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink
                to='/'
                className={styles.brand}
            >Vitrine de <span>Carros</span></NavLink>
            <ul className={styles.links_list}>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive })=> isActive ? styles.active : ""}
                    >Página Inicial</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/cars'
                        className={({ isActive })=> isActive ? styles.active : ""}
                    >Carros</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/login'
                        className={({ isActive })=> isActive ? styles.active : ""}
                    >Entrar</NavLink>
                </li>
                <li>
                    <NavLink
                        to='/register'
                        className={({ isActive })=> isActive ? styles.active : ""}
                    >Cadastrar</NavLink>
                </li>
                <li>
                    <button
                    >Sair</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;