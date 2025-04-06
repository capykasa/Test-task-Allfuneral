import styles from '../CompanyDetail.module.scss'
import Pencil from '@/assets/icons/pencil.svg'
import { TCompany } from '@/types/data'

interface InfoProps {
    company: TCompany
}

export const Info = ({ company }: InfoProps) => {
    return (
        <div className={styles['detail-info']}>
            <div className={styles['detail-info__header']}>
                <div className={styles['cdetail-info__header-title']}>{company.name}</div>
                <button className="btn btn--outline btn--small">
                    <Pencil width={16} height={16} />
                    <span>Edit</span>
                </button>
            </div>
            <div className={styles['detail-info__body']}>
                <div className={styles['detail-info__body-item']}>
                    <span className={styles['detail-info__body-item-name']}>Agreement:</span>
                    <span className={styles['detail-info__body-item-text']}>
                        {company.contract.no} / {company.contract.issue_date}
                    </span>
                </div>
                <div className={styles['detail-info__body-item']}>
                    <span className={styles['detail-info__body-item-name']}>Business entity:</span>
                    <span className={styles['detail-info__body-item-text']}>{company.businessEntity}</span>
                </div>
                <div className={styles['detail-info__body-item']}>
                    <span className={styles['detail-info__body-item-name']}>Company type:</span>
                    <span className={styles['detail-info__body-item-text']}>{company.type.join(', ')}</span>
                </div>
            </div>
        </div>
    )
}
