import { ButtonLink } from "."


/**
 * Render a button for navigating to the contacts section.
 *
 * @param {object} props - The properties for the button.
 * @returns {ReactNode} The rendered button component.
 */
function ButtonContacts(props: any) {
    const { children, ...rest } = props;
    return (
        <ButtonLink href='#contacts' {...rest}>{children}</ButtonLink>
    );
}

export default ButtonContacts