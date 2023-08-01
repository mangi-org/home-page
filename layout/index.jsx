import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import { ScrollTop } from '@/components'

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
