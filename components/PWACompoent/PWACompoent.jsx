'use client'
import React from 'react'
import { useEffect } from 'react';

export default function PWACompoent() {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
              .register('/service-worker.js')
              .then((registration) => {
                console.log('Service Worker registered:', registration);
              })
              .catch((error) => {
                console.error('Error registering Service Worker:', error);
              });
          }
    }, []);
    return (
        <div style={{display: 'none'}}>PWA activate</div>
    )
}
