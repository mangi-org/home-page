'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";

function SupportLayerIcon({ children }: { children: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

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
        <div ref={containerRef} className="absolute left-0 top-0 z-10 w-full h-full">
            {children}
        </div>
    );
}

export default SupportLayerIcon;
