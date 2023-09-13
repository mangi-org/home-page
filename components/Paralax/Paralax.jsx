'use client'
import { useEffect, useRef } from 'react';
import styles from './Paralax.module.css';
import Image from "next/image";
import CenterImage from "@/assets/webexample-main.png";
import ImageFirst from "@/assets/webexample1.png";
import ImageSecond from "@/assets/webexample2.png";
import ImageThird from "@/assets/webexample3.png";
import ImageFourth from "@/assets/webexample4.png";
import ImageFifth from "@/assets/webexample5.png";

function Paralax() {
    const refMain = useRef(null);
    const refFirst = useRef(null);
    const refSecond = useRef(null);
    const refThird = useRef(null);
    const refFourth = useRef(null);
    const refFifth = useRef(null);

    useEffect(() => {
    const handleScroll = () => {
        const scrollY = window.scrollY;
        refMain.current.style.transform = `translateY(${Math.max(Math.min(scrollY * 0.03, 200), -200)}px)`;
        refFirst.current.style.transform = `translateY(${Math.max(Math.min(scrollY * 0.15, 200), -200)}px)`;
        refSecond.current.style.transform = `translateY(${Math.max(Math.min(scrollY * 0.345, 200), -200)}px)`;
        refThird.current.style.transform = `translateY(${Math.max(Math.min(scrollY * 0.125, 200), -200)}px)`;
        refFourth.current.style.transform = `translateY(${Math.max(Math.min(scrollY * 0.08, 200), -200)}px)`;
        refFifth.current.style.transform = `translateY(${Math.max(Math.min(scrollY * 0.135, 200), -200)}px)`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


    return (
        <div className={styles.paralax}>
            <Image src={CenterImage} alt="background image" ref={refMain} />

            <div className={styles.background}>
                <Image src={ImageFirst} alt="background image" ref={refFirst} />
                <Image src={ImageSecond} alt="background image" ref={refSecond} />
                <Image src={ImageThird} alt="background image" ref={refThird} />
                <Image src={ImageFourth} alt="background image" ref={refFourth} />
                <Image src={ImageFifth} alt="background image" ref={refFifth} />
            </div>
        </div>
    );
}

export default Paralax;
