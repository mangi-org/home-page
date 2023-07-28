import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import Image from 'next/image'

const menu_urls = [
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

export default function Header() {

    return (
        <header className={styles.header}>
            <nav className={styles.navigate}>
                <Link href='/' className={styles.logo}>
                    <Image src="/mangi_logo.svg" alt="logo" width={100} height={40} priority />
                </Link>
                <menu className={styles.menu}>
                    {menu_urls.map((item, index) => (
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
                    </label>
                </div>
                <div className={styles.settings}>

                </div>
            </nav>
        </header>
    )
}
