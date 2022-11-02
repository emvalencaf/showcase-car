// modules
// react-router
import { NavLink, Link } from 'react-router-dom';
// react-icon
import { } from 'react-icons/bs';

// Redux
import { logout, reset } from '../../slices/auth.slice';

// Hooks
import { useAuth } from '../../hooks/useAuth.hook';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


//styles
import styles from './Navbar.module.css';



const Navbar = () => {

    const { auth } = useAuth();
    const { user } = useSelector((state) => state.auth);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch(logout());
        dispatch(reset());

        navigate('/');
    };

    return (
        <nav className={styles.navbar}>
            <NavLink
                to='/'
                className={styles.brand}
            >Vitrine de <span>Carros</span></NavLink>
            <ul className={styles.links_list}>
                {auth ?
                    (
                        <>
                            <li>
                                <NavLink
                                    to='/dashboard/cars/register'
                                >Registrar Carro</NavLink>
                            </li>
                            <li>
                                <span
                                    onClick={handleLogout}
                                > Sair</span>
                            </li>
                        </>

                    ) : (
                        <>
                            <li>
                                <NavLink
                                    to='/dashboard/login'
                                >Admin</NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/dashboard/register'
                                >Cadastrar</NavLink>
                            </li>
                        </>
                    )
                }
            </ul>
        </nav>
    );
};

export default Navbar;