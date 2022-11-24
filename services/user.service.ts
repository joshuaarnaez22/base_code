import { instance } from './client';
import {
  addUser,
  getAllUser,
  getTotalSocialWorker,
  getTotalFoster,
  getTotalOrphan,
  getTotalVolunteer,
  getTotalVisitation,
  getTotalPendingVisitation,
  allHistory,
  deleteUser,
  getAllVisitation,
} from './endpoint';
import { ILogin } from './types';
export const createUser = async (payload: ILogin) => {
  const { data } = await instance.post(addUser, payload);
  return data;
};

export const allUser = async () => {
  const { data } = await instance.get(getAllUser);
  return data;
};

export const allCounts = async () => {
  const data = [];
  const TOTAL_SOCIAL_WORKER = await instance.get(getTotalSocialWorker);
  const TOTAL_FOSTER = await instance.get(getTotalFoster);
  const TOTAL_ORPHAN = await instance.get(getTotalOrphan);
  const TOTAL_VOLUNTEER = await instance.get(getTotalVolunteer);
  const TOTAL_VISITATION = await instance.get(getTotalVisitation);
  const TOTAL_PENDING_VISITATION = await instance.get(
    getTotalPendingVisitation,
  );
  data.push(
    TOTAL_SOCIAL_WORKER.data,
    TOTAL_FOSTER.data,
    TOTAL_ORPHAN.data,
    TOTAL_VOLUNTEER.data,
    TOTAL_VISITATION.data,
    TOTAL_PENDING_VISITATION.data,
  );
  return data;
};

//history

export const histories = async () => {
  const { data } = await instance.get(allHistory);
  return data;
};

export const removeUser = async ({ payload }: any) => {
  const { data } = await instance.put(deleteUser, payload);
  return data;
};

//visitation
export const addVisit = async ({ payload }: any) => {
  const { data } = await instance.put(deleteUser, payload);
  return data;
};

export const getAllVisit = async () => {
  const { data } = await instance.get(getAllVisitation);
  return data;
};
