/* eslint-disable prettier/prettier */
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';

export function useAuthUser<T>(): T | undefined {
  const user = useSelector((state: RootState) => state.auth.user) as T;
  return user;
}
