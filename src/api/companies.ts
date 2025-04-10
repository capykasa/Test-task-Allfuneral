import { TCompany, TCompanyPatch, TContact } from '@/types/data'
import { AxiosInstance } from 'axios'

function createCompaniesApi(http: AxiosInstance) {
    return {
        async all(token: string, id: string) {
            return await http.get<TCompany>(`companies/${id}`, {
                headers: {
                    Authorization: token,
                },
            })
        },
        async update(token: string, data: TCompanyPatch) {
            const { id, name, shortName, businessEntity, contract, type } = data

            return await http.patch<TCompany>(
                `companies/${id}`,
                { name, shortName, businessEntity, contract, type },
                {
                    headers: {
                        Authorization: token,
                    },
                }
            )
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
