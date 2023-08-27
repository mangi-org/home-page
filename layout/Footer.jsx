import { SmootchEffect } from '@/components'
import styles from './Footer.module.css'
/**
 * Renders the footer component.
 *
 * @return {JSX.Element} The rendered footer component.
 */
export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                © {new Date().getFullYear()} Все права защищены
            </p>
        </footer>
    )
}
