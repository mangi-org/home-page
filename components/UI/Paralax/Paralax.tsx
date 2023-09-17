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

const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;


const settingsBackgroundImage = [
    {
        src: ImageFirst,
        alt: 'background image',
        transform: {
            coefficient: 0.15
        }
    },
    {
        src: ImageSecond,
        alt: 'background image',
        transform: {
            coefficient: 0.345
        }
    },
    {
        src: ImageThird,
        alt: 'background image',
        transform: {
            coefficient: 0.145
        }
    },
    {
        src: ImageFourth,
        alt: 'background image',
        transform: {
            coefficient: 0.08
        }

    },
    {
        src: ImageFifth,
        alt: 'background image',
        transform: {
            coefficient: 0.135
        }
    }
]

/**
 * Generates a parallax effect on the page based on the user's scroll position.
 *
 * @return {JSX.Element} The JSX element representing the parallax effect.
 */
function Paralax() {
    const refMain = useRef<HTMLImageElement>(null);
    const refBackImage = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!refMain.current) return;
            if (!refBackImage.current) return;
            const scrollY = window.scrollY;
            refMain.current.style.transform = `translateY(${Math.max(Math.min(scrollY * 0.03, 200), -200)}px)`;
            Array.from(refBackImage.current.children).forEach((item, index) => {
                (item as HTMLImageElement).style.transform = `translateY(${Math.max(Math.min(scrollY * settingsBackgroundImage[index].transform.coefficient, 200), -200)}px)`;
            })

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className={styles.paralax}>
            <Image src={CenterImage} alt="background image" ref={refMain} />

            <div className={styles.background} ref={refBackImage}>
                {settingsBackgroundImage.map((item, index) => (
                    <Image key={index} src={item.src} alt={item.alt}  />
                ))}
            </div>
        </div>
    );
}

export default Paralax;
