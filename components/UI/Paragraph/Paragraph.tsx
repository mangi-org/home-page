import styles from './Paragraph.module.css';

/**
 * Render a paragraph component.
 *
 * @param {React.ReactNode} children - The content of the paragraph.
 * @return {React.ReactElement} The rendered paragraph component.
 */
function Paragraph({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-base md:text-lg lg:text-xl">{children}</p>
    )
}

export default Paragraph