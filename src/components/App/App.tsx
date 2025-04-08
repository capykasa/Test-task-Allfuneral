import styles from './App.module.scss'
import { TopBar } from '../TopBar/TopBar'
import { Navigation } from '../Navigation/Navigation'
import { Page } from '../Page/Page'
import { useContext, useEffect } from 'react'
import { StoreContext } from '@/index'
import { observer } from 'mobx-react-lite'

export const App = observer(() => {
    const store = useContext(StoreContext)

    useEffect(() => {
        store.getCompanies('USERNAME')
    }, [])

    return (
        <div className={styles.main}>
            <TopBar />
            <Navigation />
            {store.isLoading 
                ? <div className={styles['loading-block']}>Loading...</div>
                : <Page />
            }
        </div>
    )
})
