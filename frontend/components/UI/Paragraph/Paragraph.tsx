/**
 * Render a paragraph component.
 *
 * @param {React.ReactNode} children - The content of the paragraph.
 * @return {React.ReactElement} The rendered paragraph component.
 */
function Paragraph(props: any) {
    const { className, children, ...rest } = props;
    const paragraphClassName = `text-base md:text-lg lg:text-xl ${className}`;

    return (
        <p className={paragraphClassName} {...rest}>
            {children}
        </p>
    );
}

export default Paragraph