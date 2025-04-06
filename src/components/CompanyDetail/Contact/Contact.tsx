import styles from '../CompanyDetail.module.scss'
import Pencil from '@/assets/icons/pencil.svg'
import { TContact } from '@/types/data'

interface ContactsProps {
    contact: TContact
}

export const Contact = ({ contact }: ContactsProps) => {
    return (
        <div className={styles['detail-info']}>
            <div className={styles['detail-info__header']}>
                <div className={styles['cdetail-info__header-title']}>Contacts</div>
                <button className="btn btn--outline btn--small">
                    <Pencil width={16} height={16} />
                    <span>Edit</span>
                </button>
            </div>
            <div className={styles['detail-info__body']}>
                <div className={styles['detail-info__body-item']}>
                    <span className={styles['detail-info__body-item-name']}>Responsible person:</span>
                    <span className={styles['detail-info__body-item-text']}>
                        {contact.firstname} {contact.lastname}
                    </span>
                </div>
                <div className={styles['detail-info__body-item']}>
                    <span className={styles['detail-info__body-item-name']}>Phone number:</span>
                    <span className={styles['detail-info__body-item-text']}>{contact.phone}</span>
                </div>
                <div className={styles['detail-info__body-item']}>
                    <span className={styles['detail-info__body-item-name']}>E-mail:</span>
                    <span className={styles['detail-info__body-item-text']}>{contact.email}</span>
                </div>
            </div>
        </div>
    )
}
