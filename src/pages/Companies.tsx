import { CompanyList } from '@/components/CompanyList/CompanyList'
import { useContext, useEffect } from 'react'
import { StoreContext } from '@/index'
import { observer } from 'mobx-react-lite'

const Companies = observer(() => {
    const store = useContext(StoreContext)

    return (
        <>
            {(store.companies && [store.companies].length > 0) &&
                <CompanyList companies={[store.companies]} />
            }
        </>
    )
})

export default Companies
