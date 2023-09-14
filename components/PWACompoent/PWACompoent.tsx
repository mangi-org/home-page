'use client'
import React, { useEffect } from 'react';

/**
 * Initializes a Progressive Web App component.
 *
 * @return {null} This component does not return a value.
 */
export default function PWAComponent() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/service-worker.js')
                .then(registration => console.log('Service Worker registered:', registration))
                .catch(error => console.error('Error registering Service Worker:', error));
        }
    }, []);

    return null;
}
