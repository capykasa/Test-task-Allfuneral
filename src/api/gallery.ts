import { TCompanyPhoto } from '@/types/data'
import { AxiosInstance } from 'axios'

function createGalleryApi(http: AxiosInstance) {
    return {
        async add(token: string, companyId: string, data: File) {
            const formData = new FormData()
            formData.append('file', data)

            return await http.post<TCompanyPhoto>(
                `companies/${companyId}/image`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: token,
                    },
                }
            )
        },
        async delete(token: string, companyId: string, name: string) {
            return await http.delete(`companies/${companyId}/image/${name}`, {
                headers: {
                    Authorization: token,
                },
            })
        },
    }
}

export default createGalleryApi
