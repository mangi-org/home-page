'use client'
import React, { useState, useEffect } from 'react';
import styles from './ScrollTop.module.css'
import Arrow from '@/assets/ArrowUp.svg'
import Image from 'next/image';

/**
 * ScrollTop component that displays a button to scroll to the top of the page when clicked.
 *
 * @return {JSX.Element} The ScrollTop component.
 */
export default function ScrollTop() {
    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = () => {       
        if (window.pageYOffset > 0) {
            setShowScroll(true);
        } else {
            setShowScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        };
    }, []);

    return (
        <div>
            {showScroll && (
                <button
                    className={styles.scroll}
                    onClick={scrollTop}
                >
                    <Image src={Arrow} alt='scroll to top' />
                </button>
            )}
        </div>
    );
}
