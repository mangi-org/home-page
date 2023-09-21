/**
 * Render a Hydrogen component.
 *
 * @param {object} props - The props object containing the text property.
 * @param {string} props.text - The text to be displayed in the component.
 * @return {JSX.Element} The rendered Hydrogen component.
 */
function Hydrogen({ text }: { text: string }) {
    return (
        <h2 className="text-center font-bold text-4xl mb-4 md:mb-6 md:text-5xl lg:text-6xl lg:mb-8" >{text}</h2>
    )
}

export default Hydrogen