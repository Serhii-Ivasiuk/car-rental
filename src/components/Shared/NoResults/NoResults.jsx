// Libs
import PropTypes from 'prop-types';
// Styled components
import { NoResultsStyled } from './NoResults.styled';

export const NoResults = ({ children }) => {
    return <NoResultsStyled>{children}</NoResultsStyled>;
};

NoResults.propTypes = {
    children: PropTypes.node.isRequired,
};
