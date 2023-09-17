import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { ScrollTop } from '@/components/UI/intex'

/**
 * Render the layout component.
 *
 * @param {Object} props - The component props.
 * @param {ReactNode} props.children - The children elements.
 * @returns {ReactElement} The rendered component.
 */
export default function Layout({ children }: { children: React.ReactNode }) {
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
