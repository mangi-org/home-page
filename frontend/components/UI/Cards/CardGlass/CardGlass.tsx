import { CardInterface } from "../interface"

/**
 * Renders a card with a glass effect.
 *
 * @param {string} className - The additional class name for the card.
 * @param {ReactNode} children - The content of the card.
 * @param {CardInterface} rest - The rest of the props for the card.
 * @return {ReactNode} The rendered card component.
 */
function CardGlass({ className, children, ...rest }: CardInterface) {
    return (
        <div className={"flex flex-col border border-orange border-solid rounded-3xl bg-black bg-opacity-30 backdrop-blur " + className} {...rest}>
            {children}
        </div>
    )
}

export default CardGlass