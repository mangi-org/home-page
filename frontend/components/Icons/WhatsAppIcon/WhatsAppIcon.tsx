import { SVGProps } from "../interface"

/**
 * Renders a WhatsApp icon as an SVG element.
 *
 * @param {string} className - The class name for the SVG element.
 * @param {string} classNamePath - The class name for the path element.
 * @param {SVGProps} props - Other props to be spread on the SVG element.
 * @return {JSX.Element} The WhatsApp icon as an SVG element.
 */
function WhatsAppIcon({className, classNamePath, ...props}: SVGProps) {
    return (
        <svg className={className} {...props} viewBox="0 0 60 58" xmlns="http://www.w3.org/2000/svg">
            <path className={classNamePath} fillRule="evenodd" clipRule="evenodd" d="M0.870117 28.9994C0.870117 12.977 13.9755 -0.000488281 30.1558 -0.000488281C46.3363 -0.000488281 59.4418 12.977 59.4418 28.9994C59.4418 45.0219 46.3363 57.9995 30.1558 57.9995C24.2256 57.9995 18.6613 56.2595 14.0487 53.2146L2.4076 56.5494L6.4344 46.0369C2.92009 41.2519 0.870117 35.3796 0.870117 28.9994ZM42.6026 44.0797L45.7507 41.0344C46.8488 39.7294 46.8488 37.7719 45.6776 36.5397L41.0652 31.9719C39.4542 30.3771 36.672 31.0297 36.0133 33.1321C35.5739 34.5822 33.8898 35.452 32.4255 35.0896C29.1308 34.2922 24.665 30.0871 23.8597 26.6795C23.3472 25.2294 24.3722 23.6345 25.8362 23.127C27.9596 22.4744 28.6183 19.7194 27.0077 18.1245L22.3953 13.557C21.1506 12.397 19.1738 12.397 18.0023 13.557L14.8541 16.6745C11.7791 19.8645 15.2202 28.4919 22.9078 36.1046C30.5952 43.7894 39.308 47.3422 42.6026 44.0797Z" />
        </svg>
    )
}

export default WhatsAppIcon