'use client'
import { useEffect } from 'react'

export default function FontsComponent() {
    useEffect(() => {
        window.onload = () => {
            const link = document.createElement('link');
            link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;700&display=swap';
            link.rel = 'stylesheet';
            link.onload = () => {
                // Шрифты успешно загружены
            };
            link.onerror = () => {
                // Обработка ошибки загрузки шрифтов, если не удалось загрузить
            };
            document.head.appendChild(link);
        }
    }, []);

    return (
        <div style={{ display: 'none' }}>Fonst Loader</div>
    )
}
