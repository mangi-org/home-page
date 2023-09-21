import { SVGProps } from "../interface"

/**
 * Renders a mail icon as an SVG component.
 *
 * @param {string} className - The class name for the SVG component.
 * @param {string} classNamePath - The class name for the path within the SVG component.
 * @param {SVGProps} props - Additional props for the SVG component.
 * @return {ReactElement} The rendered SVG component.
 */
function MailIcon({className, classNamePath, ...props}: SVGProps) {
    return (
        <svg className={className} {...props} viewBox="0 0 81 64" xmlns="http://www.w3.org/2000/svg">
            <path className={classNamePath} d="M72.0029 0.000488067L8.00293 0.000488257C3.60293 0.000488271 0.0429297 3.60049 0.0429297 8.00049L0.00292985 56.0005C0.00292987 60.4005 3.60293 64.0005 8.00293 64.0005L72.0029 64.0005C76.4029 64.0005 80.0029 60.4005 80.0029 56.0005L80.0029 8.00049C80.0029 3.60049 76.4029 0.000488054 72.0029 0.000488067ZM72.0029 56.0005L8.00293 56.0005L8.00293 19.0005L40.0029 38.5005L72.0029 19.0005L72.0029 56.0005ZM40.0029 26.5005L8.00293 8.00049L72.0029 8.00049L40.0029 26.5005Z" />
        </svg>
    )
}

export default MailIcon