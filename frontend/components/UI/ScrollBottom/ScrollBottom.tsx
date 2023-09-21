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
                <div className="absolute bottom-8 z-10">
                    <div className="relative flex flex-col justify-center items-center">
                        <Image src={Outline} className="h-16" alt="Scroll outline" />
                        <Image src={Innerline} className={"h-16 absolute top-2 " + styles.innerImg} alt="Scroll innerline" />
                    </div>
                </div>
            )}
        </>

    )
}

export default ScrollBottom