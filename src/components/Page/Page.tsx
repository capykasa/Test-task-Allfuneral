import styles from './Page.module.scss'
import Arrow from '@/assets/icons/arrow.svg'
import Pencil from '@/assets/icons/pencil.svg'
import Trash from '@/assets/icons/trash.svg'
import { CompanyList } from '../CompanyList/CompanyList'
import { CompanyDetail } from '../CompanyDetail/CompanyDetail'

export const Page = () => {
    return (
        <div className={styles.page}>
            <div className={styles['page__header']}>
                <button className={`${styles['back-btn']} btn btn--icon btn--transparent`}>
                    <Arrow width={20} height={20} />
                </button>
                <h2 className={styles['page__header-title']}>Organizations</h2>
                <div className={styles['page__header-buttons']}>
                    <button className={`${styles['edit-btn']} btn btn--icon btn--transparent`}>
                        <Pencil width={20} height={20} />
                    </button>
                    <button className={`${styles['delete-btn']} btn btn--icon btn--transparent`}>
                        <Trash width={20} height={20} />
                    </button>
                </div>
            </div>
            <div className={styles['page__body']}>
                <CompanyList />
                <CompanyDetail />
            </div>
        </div>
    )
}
