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
        async update(token: string, data: TContact) {
            const { id, firstname, lastname, phone, email } = data

            return await http.patch<TContact>(
                `contacts/${id}`,
                { lastname, firstname, phone, email },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: token,
                    },
                }
            )
        },
    }
}

export default createContactsApi
