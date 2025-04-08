import { TContact } from '@/types/data'
import { AxiosInstance } from 'axios'

function createUserApi(http: AxiosInstance) {
    return {
        async auth(username: string) {
            return (await http.get<any>(`auth?user=${username}`))
        }
    }
}

export default createUserApi
