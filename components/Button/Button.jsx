import Link from "next/link"
import styles from "./Button.module.css"

function Button(props) {
    return (
        <button className={styles.button} {...props}>{props.children}</button>
    )
}

function ButtonLink(props) {
    return (
        <Link className={styles.button} href={props.href} {...props}>{props.children}</Link>
    )
}

export { Button, ButtonLink }