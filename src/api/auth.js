import API from './api';


const authService = {
    login: (uuid) => API.post('auth/uuidLogin', {uuid}),
};

export default authService;
