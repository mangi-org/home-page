import PropTypes from 'prop-types';

/**
 * Renders the main component with the provided children.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {ReactNode} props.children - The content to be rendered inside the main component.
 * @return {ReactNode} - The rendered main component.
 */
function Main({ children }) {
    return (
        <main>
            {children}
        </main>
    );
}

Main.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Main;
