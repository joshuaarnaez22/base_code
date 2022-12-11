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
export const deleteOrphan = `${LOCALDEV}/orphans/deleteOrphan`;
export const getAllActiveOrphanApi = `${LOCALDEV}/orphans/getAllActiveOrphanApi`;
export const updateOrphan = `${LOCALDEV}/orphans/updateOrphan`;

//dashboard admin endpoints
export const getTotalSocialWorker = `${LOCALDEV}/socialworker/getTotalSocialWorker`;
export const getTotalFoster = `${LOCALDEV}/fosters/getTotalFoster`;
export const getTotalOrphan = `${LOCALDEV}/orphans/getTotalOrphan`;
export const getTotalVolunteer = `${LOCALDEV}/volunteers/getTotalVolunteer`;
export const getTotalVisitation = `${LOCALDEV}/visitation/getTotalVisitation`;
export const getTotalPendingVisitation = `${LOCALDEV}/visitation/getTotalPendingVisitation`;

//history

export const allHistory = `${LOCALDEV}/history/getAllHistory`;

//visitation
export const addVisitation = `${LOCALDEV}/visitation/addVisitation`;
export const getAllVisitation = `${LOCALDEV}/visitation/getAllVisitation`;
export const deleteVisitation = `${LOCALDEV}/visitation/deleteVisitation`;
export const updateStatusVisitation = `${LOCALDEV}/visitation/updateStatusVisitation`;
export const selectOrphan = `${LOCALDEV}/visitation/updateVisitationWithOrphan`;
export const getAllVisitationForLoggedUser = `${LOCALDEV}/visitation/getAllVisitationForLoggedUser`;

//monitoring
export const addMonitoring = `${LOCALDEV}/monitoring/addMonitoring`;
export const getAllMonitoring = `${LOCALDEV}/monitoring/getAllMonitoring`;
export const deleteMonitoring = `${LOCALDEV}/monitoring/deleteMonitoring`;

//inquiry
export const addinquiry = `${LOCALDEV}/inquiry/addinquiry`;
export const getAllInquiry = `${LOCALDEV}/inquiry/getAllInquiry`;
export const updateReadStatusInquiry = `${LOCALDEV}/inquiry/updateReadStatusInquiry`;
