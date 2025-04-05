import styles from './Page.module.scss'
import Pencil from '@/assets/icons/pencil.svg'
import Trash from '@/assets/icons/trash.svg'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import BackButton from '../BackButton/BackButton'

export const Page = () => {
    const view = useRoutes(routes);
    
    return (
        <div className={styles.page}>
            <div className={styles['page__header']}>
                <BackButton />
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
                { view }
            </div>
        </div>
    )
}
