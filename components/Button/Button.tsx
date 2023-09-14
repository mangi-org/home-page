import Link from "next/link"
import styles from "./Button.module.css"

/**
 * Renders a button with the provided props.
 *
 * @param {object} props - The properties of the button.
 * @param {string} props.className - The CSS class name for the button.
 * @param {ReactNode} props.children - The content of the button.
 * @return {ReactElement} The rendered button component.
 */
function Button(props: any) {
    return (
        <button className={styles.button} {...props}>{props.children}</button>
    )
}

/**
 * Render a button link component.
 *
 * @param {Object} props - The props object containing the properties of the button link.
 * @param {string} props.href - The URL that the button should navigate to.
 * @param {ReactNode} props.children - The content of the button.
 * @returns {ReactElement} - The rendered button link component.
 */
function ButtonLink(props: any) {
    return (
        <Link className={styles.button} href={props.href} {...props}>{props.children}</Link>
    )
}

export { Button, ButtonLink }