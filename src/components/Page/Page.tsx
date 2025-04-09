import styles from './Page.module.scss'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'

export const Page = () => {
    const view = useRoutes(routes)

    return (
        <div className={styles.page}>
            {view}
        </div>
    )
}
