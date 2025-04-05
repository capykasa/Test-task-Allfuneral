import styles from './CompanyList.module.scss'
import { CompanyItem } from '../CompanyItem/CompanyItem'
import { TCompany } from '../types/data'

interface CompanyListProps {
    companies: TCompany[]
}

export const CompanyList = ({ companies }: CompanyListProps) => {
    return (
        <div className={styles['company-list']}>
            {companies.map(company => (
                <CompanyItem key={company.id} company={company} />
            ))}
        </div>
    )
}
