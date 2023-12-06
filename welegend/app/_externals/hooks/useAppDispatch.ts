import { useDispatch } from 'react-redux';
import type { AppDispatch } from '~/app/_externals/store/store';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
