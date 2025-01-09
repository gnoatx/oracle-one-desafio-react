import { NavLink, useLocation } from "react-router-dom"
import styles from './NavButton.module.css'

type NavButtonProps = {
    label: string,
    to: string
}

export default function NavButton({label, to}: NavButtonProps) {

    let location = useLocation()
    const buttonClasses = `${styles.button} ${location.pathname === to ? styles.active : styles.inactive}`

    return (
        <NavLink to={to}>
            <div className={buttonClasses}>
                <span>{label}</span>
            </div>
        </NavLink>
    )
}