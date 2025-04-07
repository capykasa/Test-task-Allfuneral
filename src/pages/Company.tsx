import { useContext } from 'react'
import apiContext from '@/utility/context/api'
import { CompanyDetail } from '@/components/CompanyDetail/CompanyDetail'

const Company = () => {
    const company = {
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
    }

    const contact = {
        id: '16',
        lastname: 'Rosenberg',
        firstname: 'David',
        phone: '17025552345',
        email: 'david_rosenberg88@gmail.com',
        createdAt: new Date('2020-11-21T08:03:26.589Z'),
        updatedAt: new Date('2020-11-23T09:30:00Z'),
    }

    return <CompanyDetail company={company} contact={contact} />
}

export default Company
