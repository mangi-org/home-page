export interface DetailsProps {
    className?: string;
    children?: any;
    open?: boolean;
    rest?: any;
}

/**
 * Renders a details element with the provided className and children.
 *
 * @param {string} className - The class name to assign to the details element.
 * @param {ReactNode} children - The content to display within the details element.
 * @param {DetailsProps} rest - Additional props to pass to the details element.
 * @return {ReactElement} The rendered details element.
 */
function Details({ className, children, open = false, ...rest }: DetailsProps) {
    return (
        <details className={className} open={open} {...rest}>
            {children}
        </details>
    )
}

export default Details