enum TypeHydrogen {
    H1 = "h1",
    H2 = "h2",
    H3 = "h3",
    H4 = "h4",
    H5 = "h5",
    H6 = "h6",
}

export interface HydrogenProps {
    text: string
    type?: TypeHydrogen | string
    className?: string
    useDefaultClass?: boolean
}

/**
 * Render a Hydrogen component.
 *
 * @param {object} props - The props object containing the text property.
 * @param {string} props.text - The text to be displayed in the component.
 * @return {JSX.Element} The rendered Hydrogen component.
 */
function Hydrogen({ text, type = TypeHydrogen.H2, className, useDefaultClass = true }: HydrogenProps) {
    let resultClassName = useDefaultClass ? "font-bold mb-4 md:mb-6 lg:mb-8 ": "" 
    if (type === undefined) {
        type = TypeHydrogen.H2
    }

    const dictResultClassName: { [key: string]: string } = {
        [TypeHydrogen.H1]: "text-4xl md:text-5xl lg:text-6xl",
        [TypeHydrogen.H2]: "text-center text-4xl md:text-5xl lg:text-6xl",
        [TypeHydrogen.H3]: "text-3xl md:text-4xl lg:text-5xl",
        [TypeHydrogen.H4]: "text-2xl md:text-3xl lg:text-4xl",
        [TypeHydrogen.H5]: "text-xl md:text-2xl lg:text-3xl",
        [TypeHydrogen.H6]: "text-lg md:text-xl lg:text-2xl",
    }
    resultClassName += dictResultClassName[type]
    if (className) {
        resultClassName += " " + className
    }

    switch (type) {
        case TypeHydrogen.H1:
            return (
                <h1 className={resultClassName}>{text}</h1>
            )
        case TypeHydrogen.H2:
            return (
                <h2 className={resultClassName}>{text}</h2>
            )
        case TypeHydrogen.H3:
            return (
                <h3 className={resultClassName}>{text}</h3>
            )
        case TypeHydrogen.H4:
            return (
                <h4 className={resultClassName}>{text}</h4>
            )
        case TypeHydrogen.H5:
            return (
                <h5 className={resultClassName}>{text}</h5>
            )
        case TypeHydrogen.H6:
            return (
                <h6 className={resultClassName}>{text}</h6>
            )
        default:
            return (
                <h2 className={resultClassName}>{text}</h2>
            )
    }
}

export default Hydrogen