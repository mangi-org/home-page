import { SVGProps } from "../interface"

/**
 * Renders a question icon as an SVG component.
 *
 * @param {string} className - The class name for the SVG component.
 * @param {string} classNamePath - The class name for the SVG path component.
 * @param {...SVGProps} props - Other SVG props.
 * @return {JSX.Element} The rendered question icon SVG component.
 */
function QuestionIcon({className, classNamePath, ...props}: SVGProps) {
    return (
        <svg className={className} {...props} viewBox="0 0 44 74" xmlns="http://www.w3.org/2000/svg">
            <path className={classNamePath} d="M16.664 62.9619H26.3808V73.1182H16.664V62.9619ZM0.208931 23.8506C0.208931 16.8193 2.19461 11.1715 6.16596 6.90723C10.1373 2.61035 15.5898 0.461914 22.5234 0.461914C28.9361 0.461914 34.0631 2.30111 37.9042 5.97949C41.7779 9.62533 43.7148 14.2965 43.7148 19.9932C43.7148 23.4437 42.9986 26.2432 41.5664 28.3916C40.1666 30.54 37.3183 33.6976 33.0214 37.8643C29.8964 40.8916 27.8619 43.4632 26.9179 45.5791C26.0065 47.6624 25.5507 50.7549 25.5507 54.8564H16.8593C16.8593 50.2015 17.4127 46.458 18.5195 43.626C19.6262 40.7614 22.0514 37.4899 25.7949 33.8115L29.7011 29.9541C30.873 28.8473 31.817 27.6917 32.5331 26.4873C33.8352 24.3714 34.4863 22.1742 34.4863 19.8955C34.4863 16.7054 33.526 13.9385 31.6054 11.5947C29.7174 9.25098 26.5761 8.0791 22.1816 8.0791C16.7454 8.0791 12.9856 10.0973 10.9023 14.1338C9.73042 16.3799 9.0631 19.6188 8.90034 23.8506H0.208931Z" />
        </svg>

    )
}

export default QuestionIcon