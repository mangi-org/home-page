import styles from './GradientSpan.module.css';

function GradientSpan({ children }) {
    return (
        <span className={styles.gradient}>{children}</span>
    )
}

export default GradientSpan