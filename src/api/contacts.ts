import { TContact } from '@/types/data'
import { AxiosInstance } from 'axios'

function createContactsApi(http: AxiosInstance) {
    return {
        async get(id: number) {
            return (await http.get<TContact>(`contacts/${id}`)).data
        },
        async update(id: number) {
            return (await http.patch<TContact>(`contacts/${id}`)).data
        },
    }
}

export default createContactsApi
