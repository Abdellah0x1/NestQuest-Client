import { useMutation, useQuery } from "@tanstack/react-query";
import api from '../api/axios'

export const useUsers = ()=> useQuery({
        queryKey: ['users'],
        queryFn: async ()=> {
            const res = await api.get('/users/getAll');
            return res.data.data.users;
        }
})

export const useProperties = ()=> useQuery({
    queryKey: ['properties'],
    queryFn: async ()=> {
        const res = await api.get('/properties')
        return res.data.data.properties
    }
})



export const useDeleteUser = () => useMutation({
    mutationFn: (id) => api.delete(`/users/${id}`)
})


export const useAddUser = () => useMutation({
    mutationFn: (data) => api.post('/users/signup', data) 
})



