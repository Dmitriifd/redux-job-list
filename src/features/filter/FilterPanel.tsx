import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux-hook';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { selectFitlers } from './filter-selectors';

import { removeFilter, clearFilter } from './filter-slice';

const FilterPanel = () => {
  const dispatch = useAppDispatch();
  const currentFilters = useSelector(selectFitlers);

  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge key={filter} variant="clearable" onClear={() => dispatch(removeFilter(filter))}>
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className="link" onClick={() => dispatch(clearFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
