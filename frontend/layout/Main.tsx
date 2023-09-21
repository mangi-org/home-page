/**
 * Render the main component with the provided children.
 *
 * @param {Object} props - The properties object.
 * @param {ReactNode} props.children - The content to be rendered inside the main component.
 * @return {ReactNode} The main component with the provided children.
 */
function Main({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
        </main>
    );
}

export default Main;
