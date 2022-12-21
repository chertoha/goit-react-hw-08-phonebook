import Box from 'components/Box';
import { nanoid } from 'nanoid';
import { Field } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/slice';
import { selectFilter } from 'redux/filter/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const filterInputId = nanoid();

  return (
    <Box display="flex" flexDirection="column" pt={4} pb={4}>
      <Field
        id={filterInputId}
        type="text"
        value={filter}
        onChange={e => {
          dispatch(setFilter(e.currentTarget.value));
        }}
        placeholder="Search contact"
      />
    </Box>
  );
};

export default Filter;
