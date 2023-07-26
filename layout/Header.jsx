import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import Image from 'next/image'

const menu_urls = [
    {
        name: 'Работы',
        url: '#work'
    },
    {
        name: 'О нас',
        url: '#about'
    },
    {
        name: 'Почему мы?',
        url: '#why'
    },
    {
        name: 'Оставить заявку',
        url: '#email'
    },
    {
        name: 'FAQ',
        url: '#faq'
    },
    {
        name: 'Контакты',
        url: '#contacts'
    }
]

export default function Header() {


    const mobileMenuCss = {
        true: styles.menu + " " + styles.active,
        false: styles.menu
    }

    return (
        <header className={styles.header}>
            <nav className={styles.navigate}>
                <Link href='/' className={styles.logo}>
                    <Image src="/mangi_logo.svg" alt="logo" width={100} height={40} priority />
                </Link>
                <menu className={mobileMenuCss[true]}>
                    {menu_urls.map((item, index) => (
                        <li key={index}>
                            <Link href={item.url}>{item.name}</Link>
                        </li>
                    ))}
                </menu>
                <div className={styles.mobile}>
                    <input type="checkbox" name="menuBtnOpen" id="menuBtnOpen" />
                    <label htmlFor="menuBtnOpen">
                        <svg className={styles.close} xmlns="http://www.w3.org/2000/svg" width="24" height="9" viewBox="0 0 24 9" fill="none">
                            <line y1="0.5" x2="24" y2="0.5" stroke="white" />
                            <line y1="8.50006" x2="24" y2="8.50006" stroke="white" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <line x1="0.646447" y1="17.617" x2="17.617" y2="0.646465" stroke="white" />
                            <line x1="0.353553" y1="0.646447" x2="17.3241" y2="17.617" stroke="white" />
                        </svg>
                    </label>
                </div>
                <div className={styles.settings}>

                </div>
            </nav>
        </header>
    )
}
