import Link from 'next/link'
import styles from './Header.module.css'
import Image from 'next/image'
import Logo from '@/assets/mangi_logo.svg'

const menuUrls = [
    {
        name: 'Работы',
        url: '/#work'
    },
    {
        name: 'О нас',
        url: '/#about'
    },
    {
        name: 'Почему мы?',
        url: '/#why'
    },
    {
        name: 'Оставить заявку',
        url: '/#email'
    },
    {
        name: 'FAQ',
        url: '/#faq'
    },
    {
        name: 'Контакты',
        url: '/#contacts'
    }
]

/**
 * Renders the header component.
 *
 * @return {JSX.Element} The header component.
 */
export default function Header() {

    return (
        <header className={styles.header}>
            <nav className={styles.navigate}>
                <Link href='/' className={styles.logo}>
                    <Image src={Logo} alt="logo" width={100} height={40} priority />
                </Link>
                <menu className={styles.menu}>
                    {menuUrls.map((item, index) => (
                        <li key={index}>
                            <Link href={item.url}>{item.name}</Link>
                        </li>
                    ))}
                </menu>
                <div className={styles.mobile}>
                    <input type="checkbox" name="menuBtnOpen" id="menuBtnOpen" />
                    <label htmlFor="menuBtnOpen">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>
                <div className={styles.settings}>
                </div>
            </nav>
        </header>
    )
}
