import PropTypes from 'prop-types';
import { ClipLoader, PropagateLoader } from 'react-spinners';
import { Wrapper } from './Spinner.styled';

const TYPE = {
  BUTTON: 'button',
  DEFAULT: 'default',
};

const Spinner = ({ type }) => {
  if (type === TYPE.BUTTON)
    return (
      <Wrapper>
        <ClipLoader color="#435651" size={12} speedMultiplier={1} />
      </Wrapper>
    );

  if (type === TYPE.DEFAULT)
    return (
      <Wrapper>
        <PropagateLoader color="#435651" loading size={5} speedMultiplier={2} />
      </Wrapper>
    );
};

Spinner.type = TYPE;

Spinner.propTypes = {
  type: PropTypes.oneOf([TYPE.BUTTON, TYPE.DEFAULT]),
};

export default Spinner;
