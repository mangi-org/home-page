'use client'
import styles from './ScrollBottom.module.css'
import Outline from '@/assets/scrollBottomOutline.svg'
import Innerline from '@/assets/scrollBottomInnerline.svg'
import Image from "next/image"
import { useState, useEffect } from "react"


/**
 * Scrolls to the bottom of the page.
 *
 * @return {JSX.Element} The scroll component to be rendered.
 */
function ScrollBottom() {

    const [showScroll, setShowScroll] = useState(true)

    /**
     * Checks the scroll top position and updates the showScroll state.
     *
     * @return {void}
     */
    const checkScrollTop = () => {
        if (window.pageYOffset > 100) {
            setShowScroll(false);
        } else {
            setShowScroll(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        }
    }, []);

    return (
        <>
            {showScroll && (
                <div className={styles.scroll}>
                    <div className={styles.group}>
                        <Image src={Outline} alt="" />
                        <Image src={Innerline} alt="" />
                    </div>
                </div>
            )}
        </>

    )
}

export default ScrollBottom