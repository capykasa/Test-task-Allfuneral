import styles from './App.module.scss'
import { TopBar } from '../TopBar/TopBar'
import { Navigation } from '../Navigation/Navigation'
import { Page } from '../Page/Page'

export const App = () => {
    return (
        <div className={styles.main}>
            <TopBar />
            <Navigation />
            <Page />
        </div>
    )
}
