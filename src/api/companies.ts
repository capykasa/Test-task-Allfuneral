import { TCompany, TContact } from '@/types/data'
import { AxiosInstance } from 'axios'

function createCompaniesApi(http: AxiosInstance) {
    return {
        async all() {
            return (await http.get<TCompany[]>('companies')).data
        },
        async get() {
            return (await http.get<TCompany>(`companies/${12}`)).data
        },
        async update(id: number) {
            return (await http.patch<TCompany>(`companies/${id}`)).data
        },
        async delete(id: number) {
            return (await http.delete<TCompany>(`companies/${id}`)).data
        },
    }
}

export default createCompaniesApi
