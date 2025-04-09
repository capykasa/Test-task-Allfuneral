import styles from './CompanyDetail.module.scss'
import { TCompany, TContact } from '@/types/data'
import { Info } from './Info/Info'
import { Contact } from './Contact/Contact'
import { Photos } from './Photos/Photos'
import { PageHeader } from '../PageHeader/PageHeader'

interface CompanyDetailProps {
    company: TCompany
    contact: TContact
}

export const CompanyDetail = ({ company, contact }: CompanyDetailProps) => {
    return (
        <>
            <PageHeader company={company} />
            <div className={styles['page__body']}>
                <div className={styles['company-detail']}>
                    <Info company={company} />

                    {contact && <Contact contact={contact} />}

                    <Photos company={company} />
                </div>
            </div>
        </>
    )
}
