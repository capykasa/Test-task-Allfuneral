import styles from './CompanyDetail.module.scss'
import { TCompany, TContact } from '@/types/data'
import { Info } from './Info/Info'
import { Contact } from './Contact/Contact'
import { Photos } from './Photos/Photos'

interface CompanyDetailProps {
    company: TCompany
    contact: TContact
}

export const CompanyDetail = ({ company, contact }: CompanyDetailProps) => {
    return (
        <div className={styles['company-detail']}>
            <Info company={company} />

            {contact && <Contact contact={contact} />}

            <Photos company={company} />
        </div>
    )
}
