'use client'
import { useEffect } from 'react'

/**
 * Generates a function comment for the given function body.
 *
 * @return {void} - No return value.
 */
export default function FontsComponent() {
    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap';
        link.rel = 'stylesheet';
        link.onload = () => {
            // Fonts successfully loaded
        };
        link.onerror = () => {
            // Handle font loading error if failed to load
        };
        document.head.appendChild(link);
    }, []);

    return null;
}
