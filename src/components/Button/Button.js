import PropTypes from 'prop-types';
import { StyledButton } from './Button.styled';
import { theme } from 'utils/theme';

const Button = ({
  type = 'button',
  onClick = null,
  disabled = false,
  size = 'sm',
  children,
}) => {
  return (
    <StyledButton
      size={size}
      className="button"
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(theme.fontSizes)),
  children: PropTypes.node,
};

export default Button;
