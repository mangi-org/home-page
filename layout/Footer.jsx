/**
 * Renders the footer component.
 *
 * @return {JSX.Element} The rendered footer component.
 */
export default function Footer() {
    return (
        <footer>
            <section>
                <p>
                    © {new Date().getFullYear()} Все права защищены
                </p>
            </section>
        </footer>
    )
}
