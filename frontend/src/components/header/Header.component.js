//components
import Navbar from "./navbar/Navbar.component"

//styles
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Navbar  />
        </header>
    );
};

export default Header;