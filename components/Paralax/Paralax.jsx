'use client'
import styles from './Paralax.module.css'
import Image from "next/image"
import CenterImage from "@/assets/webexample-main.png"
import ImageFirst from "@/assets/webexample1.png"
import ImageSecond from "@/assets/webexample2.png"
import ImageThird from "@/assets/webexample3.png"
import ImageFourth from "@/assets/webexample4.png"
import ImageFifth from "@/assets/webexample5.png"
import { useEffect, useRef } from 'react'
// import gsap from 'gsap'
// import { Power0 } from 'gsap-trial'

function Paralax() {

    const refBackground = useRef(null)
    const refMain = useRef(null)

    useEffect(() => {
        // const timeline = new gsap.timeline();
        // const bgImages = refBackground.current.children;
        // const fgImage = refMain.current;
        // const scrollAnimation = () => {
        //     timeline.to(bgImages, {
        //         y: -window.scrollY * 0.1,
        //         ease: "Power0.easeNone"
        //     })
        //         .to(fgImage, {
        //             y: -window.scrollY * 0.05,
        //             ease: "Power0.easeNone"
        //         });
        // }
        // window.addEventListener('scroll', scrollAnimation);

        // return () => {
        //     window.removeEventListener('scroll', scrollAnimation);
        // }

    }, [])

    return (
        <div className={styles.paralax}>
            <Image src={CenterImage} alt="background image" ref={refMain} />

            <div className={styles.background} ref={refBackground}>
                <Image src={ImageFirst} alt="background image" />
                <Image src={ImageSecond} alt="background image" />
                <Image src={ImageThird} alt="background image" />
                <Image src={ImageFourth} alt="background image" />
                <Image src={ImageFifth} alt="background image" />
            </div>
        </div>
    )
}

export default Paralax