import { JobPosition } from './JobPosition';

import { addFilter } from '../filter/filter-slice';
import { usePositions } from './use-positions';
import { useFetchPosiotions } from './use-fetch-positions';
import { useAppDispatch } from 'redux-hook';

const JobList = () => {
  useFetchPosiotions();
  const positions = usePositions();
  const dispatch = useAppDispatch();

  const handleAddFilter = (filter: string) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition key={item.id} handleAddFilter={handleAddFilter} {...item} />
      ))}
    </div>
  );
};

export { JobList };
