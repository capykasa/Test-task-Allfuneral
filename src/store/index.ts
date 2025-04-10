import { makeAutoObservable, configure } from 'mobx'
import { TApiInstance } from '@/api'
import { TCompany, TContact } from '@/types/data'

configure({
    useProxies: "never"
})

export default class Store {
    api: TApiInstance | null = null
    companies: TCompany | null = null
    currentContact: TContact | null = null
    isAuth = true
    isLoading = true

    constructor(api: TApiInstance) {
        makeAutoObservable(this)
        this.api = api
    }

    setCompanies(companies: TCompany) {
        this.companies = companies
    }

    setAuth(bool: boolean) {
        this.isAuth = bool
    }

    setLoading(bool: boolean) {
        this.isLoading = bool
    }

    async auth(username: string) {
        try {
            this.api.user.auth(username).then(res => {
                if (res.status !== 200 || !res.headers.authorization) {
                    throw new Error('Auth error')
                }

                localStorage.clear()
                localStorage.setItem('token', res.headers.authorization)
                this.setAuth(true)
            })
        } catch (e) {
            console.log(e)
        }
    }

    async getCompanies() {
        try {
            this.api.companies.all(localStorage.getItem('token'), '12').then(res => {
                if (res.status !== 200 || !res.data) {
                    throw new Error('Get companies error')
                }
                this.setCompanies(res.data)
                this.setLoading(false)
            })
        } catch (e) {
            console.log(e)
        }
    }

    get company() {
		return (id: string) => [this.companies].find(company => company.id === id);
	}
}
