import { instance } from './client';
import { addOrphan, getAllOrphan } from './endpoint';

export const createOrphan = async (payload: any) => {
  const { data } = await instance.post(addOrphan, payload);
  return data;
};

export const allOrphans = async () => {
  const { data } = await instance.get(getAllOrphan);
  return data;
};
