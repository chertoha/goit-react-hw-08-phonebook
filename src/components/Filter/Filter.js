import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const Filter = ({ type = 'outline', iconRight = false }) => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const IconElement = iconRight ? InputRightElement : InputLeftElement;

  return (
    <Box display="flex" flexDirection="column" w="100%">
      <InputGroup>
        <IconElement
          height="100%"
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />

        <Input
          type="text"
          name="password"
          variant={type}
          placeholder="Search contact"
          onChange={e => {
            dispatch(setFilter(e.currentTarget.value));
          }}
          value={filter}
          size="sm"
        />
      </InputGroup>
    </Box>
  );
};

Filter.propTypes = {
  type: PropTypes.oneOf(['outline', 'filled', 'flushed', 'unstyled']),
  iconRight: PropTypes.bool,
};

export default Filter;
