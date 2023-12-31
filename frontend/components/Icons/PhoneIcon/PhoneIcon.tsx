import { SVGProps } from "../interface"

/**
 * Renders a phone icon SVG component.
 *
 * @param {string} className - The class name for the SVG element.
 * @param {string} classNamePath - The class name for the path element.
 * @param {SVGProps} props - The remaining SVG props.
 * @return {JSX.Element} The rendered phone icon SVG component.
 */
function PhoneIcon({className, classNamePath, ...props}: SVGProps) {
    return (
        <svg className={className} {...props} viewBox="0 0 62 63" xmlns="http://www.w3.org/2000/svg">
            <path className={classNamePath} d="M57.7727 62.8776C25.1395 62.9243 0.370884 37.4215 0.405309 4.50364C0.405309 2.35118 2.11903 0.599609 4.23057 0.599609L14.3293 0.599609C16.2228 0.599609 17.8332 2.01643 18.1124 3.9237C18.7784 8.49743 20.086 12.9503 21.9951 17.1461L22.3891 18.0102C22.6538 18.5917 22.7107 19.2489 22.5501 19.8685C22.3895 20.4882 22.0214 21.0313 21.5093 21.4043C18.3802 23.6775 17.1867 28.251 19.6234 31.8165C22.6912 36.3057 26.5202 40.2029 30.9309 43.3261C34.4386 45.8017 38.9333 44.5872 41.1636 41.4073C41.5298 40.8845 42.0639 40.5087 42.6736 40.3444C43.2836 40.1804 43.9307 40.2382 44.5029 40.508L45.3482 40.9052C49.472 42.8514 53.8481 44.1824 58.3426 44.8599C60.2171 45.1439 61.6095 46.7825 61.6095 48.7132L61.6095 58.9852C61.6095 59.4966 61.5106 60.0031 61.3181 60.4757C61.1253 60.948 60.8434 61.3774 60.4878 61.739C60.1321 62.1005 59.7101 62.387 59.2453 62.5825C58.7809 62.7776 58.2831 62.878 57.7805 62.8776L57.7727 62.8776Z" />
        </svg>
    )
}

export default PhoneIcon