import styles from './CompanyList.module.scss'
import { CompanyItem } from '../CompanyItem/CompanyItem'
import { TCompany } from '../../types/data'
import { PageHeader } from '../PageHeader/PageHeader'

interface CompanyListProps {
    companies: TCompany[]
}

export const CompanyList = ({ companies }: CompanyListProps) => {
    return (
        <>
            <PageHeader />
            <div className={styles['page__body']}>
                <div className={styles['company-list']}>
                    {companies.map(company => (
                        <CompanyItem key={company.id} company={company} />
                    ))}
                </div>
            </div>
        </>
    )
}
