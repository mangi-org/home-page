import { ButtonLink } from "."


function ButtonContacts(props) {
    return (
        <ButtonLink href='#contacts' {...props}>{props.children}</ButtonLink>
    )
}

export default ButtonContacts