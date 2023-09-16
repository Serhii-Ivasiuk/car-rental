// Libs
import PropTypes from 'prop-types';
// Static data
import errorPlaceholder from 'img/errorPlaceholder.png';
// Styled components
import { ErrorCardStyled, ErrorImage, ErrorText } from './ErrorCard.styled';

export const ErrorCard = ({ children }) => {
    return (
        <>
            <ErrorCardStyled>
                <ErrorImage src={errorPlaceholder} alt="error" />
                <ErrorText>
                    {children.split('. ').map(item => (
                        <span key={item}>{item}</span>
                    ))}
                </ErrorText>
            </ErrorCardStyled>
        </>
    );
};

ErrorCard.propTypes = {
    children: PropTypes.node.isRequired,
};
