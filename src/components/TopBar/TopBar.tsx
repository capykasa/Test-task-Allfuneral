import styles from './TopBar.module.scss'
import Logo from '@/assets/icons/logo.svg'
import Case from '@/assets/icons/case.svg'
import Search from '@/assets/icons/search.svg'
import Settings from '@/assets/icons/settings.svg'
import Signout from '@/assets/icons/signout.svg'

export const TopBar = () => {
    return (
        <div className={styles['top-bar']}>
            <div className={styles['top-bar__header']}>
                <Logo width={36} height={36} />
                <button className="btn btn--icon">
                    <Case width={20} height={20} />
                </button>
                <button className="btn btn--icon">
                    <Search width={20} height={20} />
                </button>
            </div>
            <div className={styles['top-bar__user-gui']}>
                <button className="btn btn--icon">
                    <Settings width={20} height={20} />
                </button>
                <button className="btn btn--icon">
                    <Signout width={20} height={20} />
                </button>
            </div>
        </div>
    )
}
