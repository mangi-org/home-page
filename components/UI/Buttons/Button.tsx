import Link from "next/link"

const buttonClassName = "bg-orange border-2 border-orange border-solid text-dark py-5 px-10 rounded-xl transition-all w-max hover:bg-dark hover:text-orange"

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
        <button className={buttonClassName} {...props}>{props.children}</button>
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
        <Link className={buttonClassName} href={props.href} {...props}>{props.children}</Link>
    )
}

/**
 * Renders a button component for contacts.
 *
 * @param {any} props - The properties for the button component.
 * @return {JSX.Element} The rendered button component.
 */
function ButtonContacts(props: any) {
    const { children, ...rest } = props;
    return (
        <ButtonLink href='#contacts' {...rest}>{children}</ButtonLink>
    );
}

export { Button, ButtonLink, ButtonContacts }