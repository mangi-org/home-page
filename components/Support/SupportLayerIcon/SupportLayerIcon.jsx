'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./SupportLayerIcon.module.css";

function SupportLayerIcon({ children }) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const childrenElements = Array.from(container.children);

        // Set initial position of children in the center of the container
        gsap.set(childrenElements, {
            x: "50%",
            opacity: 0,
        });

        // Animate children to their final positions
        gsap.to(childrenElements, {
            x: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2.out",
            delay: 3,
        });
    }, []);

    return (
        <div ref={containerRef} className={styles.container}>
            {children}
        </div>
    );
}

export default SupportLayerIcon;
