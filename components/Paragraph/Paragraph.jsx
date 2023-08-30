import styles from './Paragraph.module.css';

function Paragraph({ children }) {
    return (
        <p className={styles.paragraph}>{children}</p>
    )
}

export default Paragraph