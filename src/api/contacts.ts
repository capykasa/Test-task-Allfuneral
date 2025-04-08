import { TContact } from '@/types/data'
import { AxiosInstance } from 'axios'

function createContactsApi(http: AxiosInstance) {
    return {
        async get(token: string, id: string) {
            return await http.get<TContact>(`contacts/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
        },
        async update(token: string, id: string) {
            return await http.patch<TContact>(`contacts/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
        },
    }
}

export default createContactsApi
