import styles from './CompanyItem.module.scss'
import { Link } from 'react-router-dom'
import { TCompany } from '../../types/data'

interface CompanyItemProps {
    company: TCompany
}

export const CompanyItem = ({ company }: CompanyItemProps) => {
    const cotractIssueDate = new Date(company.contract.issue_date)

    return (
        <Link to={`/company/${company?.id}`} className={styles['company-item']}>
            <div className={styles['company-item__header']}>
                <div className={styles['company-item__header-title']}>{company?.name}</div>
            </div>
            <div className={styles['company-item__body']}>
                <div className={styles['company-item__body-item']}>
                    {company?.contract.no}
                    <span className={styles['company-item__body-item--separator']}>/</span>
                    {cotractIssueDate.toLocaleDateString()}
                </div>
                <div className={styles['company-item__body-item']}>{company?.businessEntity}</div>
            </div>
        </Link>
    )
}
