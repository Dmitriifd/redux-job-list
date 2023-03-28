import { selectFitlers } from 'features/filter/filter-selectors';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { selectVisiblePositions } from './position-selectors';

export const usePositions = () => {
  const currentFitlers = useSelector(selectFitlers);
  const positions = useSelector((state: RootState) => selectVisiblePositions(state, currentFitlers));

  return positions;
};
