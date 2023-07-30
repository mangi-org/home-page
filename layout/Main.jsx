import PropTypes from 'prop-types';

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
