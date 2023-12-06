import { TypedUseSelectorHook, useSelector } from 'react-redux';
import type { RootState } from '~/app/_externals/store/store';

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
