import styles from './Hydrogen.module.css'

/**
 * Render a Hydrogen component.
 *
 * @param {object} props - The props object containing the text property.
 * @param {string} props.text - The text to be displayed in the component.
 * @return {JSX.Element} The rendered Hydrogen component.
 */
function Hydrogen({ text }: { text: string }) {
    return (
        <h2 className={styles.hydrogen} >{text}</h2>
    )
}

export default Hydrogen