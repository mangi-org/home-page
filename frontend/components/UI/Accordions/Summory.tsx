import { HTMLAttributes } from "react";

export interface SummoryProps extends HTMLAttributes<HTMLElement> {
    children?: any;
}

/**
 * Renders a <summary> element with the provided className and children.
 *
 * @param {string} className - The CSS class name to apply to the <summary> element.
 * @param {ReactNode} children - The content to render inside the <summary> element.
 * @param {RestProps} rest - Additional props to spread onto the <summary> element.
 * @return {ReactElement} The rendered <summary> element.
 */
function Summory({ className, children, ...rest }: SummoryProps) {

    const resultClassName = "w-full relative " + className

    return (
        <summary className={resultClassName} {...rest}>
            {children}
        </summary>
    )
}

export default Summory