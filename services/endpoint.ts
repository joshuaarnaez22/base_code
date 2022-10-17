const devUrl = process.env.DEVELOPMENT_URL;
//User endpoints
const addUser = `${devUrl}/users/addUser`;
const getAllUser = `${devUrl}/users/getAllUser`;
const updateUser = `${devUrl}/users/updateUser`;
const deleteUser = `${devUrl}/users/deleteUser`;

const endpoints = {
    addUser,
    getAllUser,
    updateUser,
    deleteUser,
};
export default endpoints;
