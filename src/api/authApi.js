import api from "./axios"


export const login = (data)=> api.post('/users/login', data);
export const signup = (data)=> api.post('/users/signup', data);
export const getMe = ()=> api.post('/users/getMe');
export const logout = ()=>api.post('/users/logout');
