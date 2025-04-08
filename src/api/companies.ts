import { TCompany, TContact } from '@/types/data'
import { AxiosInstance } from 'axios'

function createCompaniesApi(http: AxiosInstance) {
    return {
        async all(token: string) {
            return await http.get<TCompany>(`companies/${12}`, {
                headers: {
                    Authorization: token,
                },
            })
        },
        async update(token: string, id: string) {
            return await http.patch<TCompany>(`companies/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
        },
        async delete(token: string, id: string) {
            return await http.delete<TCompany>(`companies/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
        },
    }
}

export default createCompaniesApi
