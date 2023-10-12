export interface DetailsProps {
    text: string;
    className?: string;
    children?: any;
    open?: boolean;
    rest?: any;
}

/**
 * Renders an accordion component with optional custom styling and content.
 *
 * @param {string} className - The CSS class name for the component.
 * @param {ReactNode} children - The content to be displayed within the accordion.
 * @param {string} text - The text to be displayed as the summary of the accordion.
 * @param {boolean} open - Whether the accordion should be initially open or closed.
 * @param {object} rest - Any additional props to be spread onto the <details> element.
 * @return {ReactElement} The rendered accordion component.
 */
function Accordions({ className, children, text, open = false, ...rest }: DetailsProps) {

    const resultClassName = `relative ${className}`;

    return (
        <details className={resultClassName} open={open} {...rest}>
            <summary className="cursor-pointer text-xl w-full md:text-2xl lg:text-3xl">{text}</summary>
            {children}
        </details>
    )
}

export default Accordions