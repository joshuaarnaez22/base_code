import { instance } from './client';
import { addUser, getAllUser } from './endpoint';
import { ILogin } from './types';
export const createUser = async (payload: ILogin) => {
  const { data } = await instance.post(addUser, payload);
  return data;
};

export const allUser = async () => {
  const { data } = await instance.get(getAllUser);
  return data;
};
