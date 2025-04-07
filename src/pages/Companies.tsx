import { useContext, useEffect, useState } from 'react'
import apiContext from '@/utility/context/api'
import { CompanyList } from '@/components/CompanyList/CompanyList'
import { TCompany } from '@/types/data'

const Companies = () => {
    const companies = [
        {
            id: 12,
            contactId: 16,
            name: 'Eternal Rest Funeral Home',
            shortName: 'ERFH',
            businessEntity: 'Partnership',
            contract: {
                no: '1624/2-24',
                issue_date: new Date('2024-03-12T00:00:00Z'),
            },
            type: ['funeral_home', 'logistics_services'],
            status: 'active',
            photos: [
                {
                    name: '0b8fc462dcabf7610a91.jpg',
                    filepath: 'https://test-task-api.allfuneral.com/0b8fc462dcabf7610a91.jpg',
                    thumbpath: 'https://test-task-api.allfuneral.com/0b8fc462dcabf7610a91_thumb.jpg',
                    createdAt: new Date('2024-12-17T08:00:00Z'),
                },
            ],
            createdAt: new Date('2020-11-21T08:03:00Z'),
            updatedAt: new Date('2020-11-23T09:30:00Z'),
        },
    ]

    const api = useContext(apiContext)
    const [res, setCompanies] = useState<TCompany>(null)

    // useEffect(() => {
    //     // api.companies.get().then(data => setCompanies(data))
    //     fetch('https://test-task-api.allfuneral.com/auth?user=USERNAME')
    //         // .then(response => response.json())
    //         .then(res => console.log(res))
    // }, [])

    return <CompanyList companies={companies} />
}

export default Companies
