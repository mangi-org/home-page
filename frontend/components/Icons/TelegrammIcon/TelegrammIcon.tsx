import { SVGProps } from "../interface"

/**
 * Render the TelegrammIcon component.
 *
 * @param {string} className - The class name for the SVG element.
 * @param {string} classNamePath - The class name for the path element.
 * @param {SVGProps} props - Additional props for the SVG element.
 * @return {JSX.Element} The rendered TelegrammIcon component.
 */
function TelegrammIcon({className, classNamePath, ...props}: SVGProps) {
    return (
        <svg className={className} {...props} viewBox="0 0 62 54" xmlns="http://www.w3.org/2000/svg">
            <path className={classNamePath} d="M1.75203 25.8957L15.8686 31.2133L21.3325 48.9487C21.6822 50.0844 23.0584 50.5045 23.9719 49.7505L31.8407 43.2764C32.6656 42.598 33.8403 42.5642 34.7024 43.1958L48.895 53.5955C49.8722 54.3123 51.2566 53.7719 51.5016 52.5801L61.8985 2.1053C62.1658 0.803488 60.8985 -0.282351 59.6704 0.197078L1.73549 22.7541C0.305789 23.3106 0.318238 25.3535 1.75203 25.8957ZM20.452 28.3827L48.041 11.2328C48.5371 10.9254 49.0471 11.6022 48.6213 12.0008L25.8523 33.362C25.0519 34.114 24.5358 35.1203 24.3896 36.2123L23.614 42.0136C23.5111 42.7881 22.4331 42.8652 22.2213 42.1154L19.2384 31.5369C18.8968 30.3302 19.3946 29.0414 20.452 28.3827Z" />
        </svg>
    )
}

export default TelegrammIcon