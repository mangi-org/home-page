/**
 * Represents the props for an SVG element.
 */
interface SVGProps {
    /**
     * The class name for the SVG element.
     */
    className?: string;
  
    /**
     * The class name for the path element.
     */
    classNamePath?: string;
  
    /**
     * Additional props to be spread on the SVG element.
     */
    props?: any;
}

export type { SVGProps }