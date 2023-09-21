import React from 'react'
/**
 * Renders the footer component.
 *
 * @return {JSX.Element} The rendered footer component.
 */
export default function Footer() {
    return (
        <footer className="flex mx-auto my-4 justify-center text-center self-center items-center">
            <p>
                © {new Date().getFullYear()} Все права защищены
            </p>
        </footer>
    )
}
