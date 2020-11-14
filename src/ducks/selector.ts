import { useSelector } from 'react-redux';
import { IAppState } from './slices/appSlice';
import { TRootState } from './store';

export const useAppState = (): IAppState =>
  useSelector((state: TRootState) => state.app);
