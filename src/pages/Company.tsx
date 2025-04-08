import { CompanyDetail } from '@/components/CompanyDetail/CompanyDetail'
import { useContext, useEffect, useState } from 'react'
import { StoreContext } from '@/index'
import { observer } from 'mobx-react-lite'
import { TCompany, TContact } from '@/types/data'
import { useParams } from 'react-router-dom'

const Company = observer(() => {
    const store = useContext(StoreContext)
    const {id} = useParams()
    const [company, setCompany] = useState<TCompany | null>(null)
    const [contact, setContact] = useState<TContact | null>(null)

    useEffect(() => {
        setCompany(store.company(id))
    }, [])

    useEffect(() => {
        if (company?.contactId) {
            store.api.contacts.get(localStorage.getItem('token'), company?.contactId)
                .then(res => {
                    if (res.status === 200 || res.data) {
                        setContact(res.data)
                    }
                })
        }
    }, [company])

    return (
        <>
            {(company && contact) &&
                <CompanyDetail company={company} contact={contact} />
            }
        </>
    )
})

export default Company
