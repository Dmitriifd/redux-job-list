import { useEffect } from 'react';
import { addPositions } from './position-slice';
import { useAppDispatch } from 'redux-hook';

import data from '../../mock/data.json';

export const useFetchPosiotions = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  }, [dispatch]);
};
