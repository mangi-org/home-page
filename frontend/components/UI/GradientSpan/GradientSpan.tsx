import styles from './GradientSpan.module.css';

function GradientSpan({ children }: { children: React.ReactNode }) {
    return (
        <span className={styles.gradient}>{children}</span>
    )
}

export default GradientSpan