import { Outlet, NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import NavButton from "../../components/NavButton";
import styles from './DefaultLayout.module.css'


export default function DefaultLayout() {
    return (
        <>
            <header className={styles.header}>
                <Logo />
                <nav className={styles.nav}>
                    <NavButton label='HOME' to='/' />
                    <NavButton label='NOVO VÍDEO' to='/new' />
                </nav>
            </header>
            <Outlet />
            <NavLink to="https://github.com/gnoatx">
                <footer className={styles.footer}>
                    <strong>
                        <span className={styles.credit}>Victor Gnoato</span> @ 2024
                    </strong>
                </footer>
            </NavLink>
        </>
    )
}