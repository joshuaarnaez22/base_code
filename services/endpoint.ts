const LOCALDEV = 'https://back-end-ochre-five.vercel.app';
// const LOCALDEV = 'http://localhost:3000';

//Authentication
export const login = `${LOCALDEV}/authentication/login`;

//User
export const addUser = `${LOCALDEV}/users/addUser`;
export const getAllUser = `${LOCALDEV}/users/getAllUser`;
export const updateUser = `${LOCALDEV}/users/updateUser`;
export const deleteUser = `${LOCALDEV}/users/deleteUser`;

//Orphans
export const addOrphan = `${LOCALDEV}/orphans/addOrphan`;
export const getAllOrphan = `${LOCALDEV}/orphans/getAllOrphan`;

//dashboard admin endpoints
export const getTotalSocialWorker = `${LOCALDEV}/socialworker/getTotalSocialWorker`;
export const getTotalFoster = `${LOCALDEV}/fosters/getTotalFoster`;
export const getTotalOrphan = `${LOCALDEV}/orphans/getTotalOrphan`;
export const getTotalVolunteer = `${LOCALDEV}/volunteers/getTotalVolunteer`;
export const getTotalVisitation = `${LOCALDEV}/visitation/getTotalVisitation`;
export const getTotalPendingVisitation = `${LOCALDEV}/visitation/getTotalPendingVisitation`;
