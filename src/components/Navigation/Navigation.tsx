import styles from './Navigation.module.scss'
import Case from '@/assets/icons/case.svg'
import Helmet from '@/assets/icons/helmet.svg'
import Users from '@/assets/icons/users.svg'

export const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles['navigation__header']}>
                <h1>Oak Tree Cemetery</h1>
                <span>Process Manager</span>
            </div>
            <div className={styles['navigation__body']}>
                <button className="btn">
                    <Case width={16} height={16} />
                    <span>Organizations</span>
                </button>
                <button className="btn btn--outline">
                    <Helmet width={16} height={16} />
                    <span>Contractors</span>
                </button>
                <button className="btn btn--outline">
                    <Users width={16} height={16} />
                    <span>Clients</span>
                </button>
            </div>
            <div className={styles['navigation__footer']}>
                <span className={styles['navigation__footer-copyright']}>All Funeral Services © 2015-2025</span>
            </div>
        </div>
    )
}
