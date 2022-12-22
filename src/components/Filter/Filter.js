// import Box from 'components/Box';
import { nanoid } from 'nanoid';
// import { Field } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterInputId = nanoid();

  return (
    <Box display="flex" flexDirection="column" pt={4} pb={4}>
      <InputGroup>
        <InputLeftElement
          height="100%"
          pointerEvents="none"
          children={<Search2Icon color="gray.300" />}
        />
        <Input
          type="text"
          name="password"
          variant="outline"
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

export default Filter;
