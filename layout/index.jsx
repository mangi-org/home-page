import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { ScrollTop } from '@/components'

/**
 * Render the layout component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children elements.
 * @returns {ReactElement} The rendered component.
 */
export default function Layout({ children }) {
    return (
        <div className='wrapper'>
            <Header />
            <Main>
                {children}
            </Main>
            <Footer />
            <ScrollTop />
        </div>
    )
}
