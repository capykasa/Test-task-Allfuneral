import styles from './CompanyItem.module.scss'
import { Link } from 'react-router-dom'
import { TCompany } from '../../types/data'

interface CompanyItemProps {
    company: TCompany
}

export const CompanyItem = ({ company }: CompanyItemProps) => {
    return (
        <Link to={`/company/${company.id}`} className={styles['company-item']}>
            <div className={styles['company-item__header']}>
                <div className={styles['company-item__header-title']}>{company.name}</div>
            </div>
            <div className={styles['company-item__body']}>
                <div className={styles['company-item__body-item']}>
                    {company.contract.no} / {company.contract.issue_date}
                </div>
                <div className={styles['company-item__body-item']}>{company.businessEntity}</div>
            </div>
        </Link>
    )
}
